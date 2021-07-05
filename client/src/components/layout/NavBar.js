import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import logo3 from "../../images/logo3.svg";
import {
  Container,
  FlexGap,
  SpaceOut,
  Text,
  MainNav,
  ButtonLink,
} from "../styled_components/components";
import { connect } from "react-redux";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { truncate } from "../../functions/mainFuctions";

const NavBar = ({ user }) => {
  const history = useHistory();
  const [active, setActive] = useState(1);

  useEffect(() => {
    history.location.pathname === "/" && setActive(1);
    history.location.pathname === "/explore" && setActive(2);
    history.location.pathname === "/bookmarks" && setActive(3);

    // console.log(qs.parse(history.location.search.substring(1)));
    return history.listen((location) => {
      location.pathname === "/" && setActive(1);
      location.pathname === "/explore" && setActive(2);
      location.pathname === "/bookmarks" && setActive(3);
    });
  }, [history]);
  return (
    <nav className="bg-white  py-5">
      <div className="max-w-9/10 m-auto">
        <div className="flex items-center justify-between">
          <img src={logo1} alt="" className="hidden sm:block" />
          <img src={logo3} alt="" className="block sm:hidden" />

          <ul className="flex items-center gap-7 p-0 m-0 font-poppins hidden md:flex">
            <li className="relative flex justify-center px-5 pt-1">
              <Link
                to="/"
                className={`font-medium ${
                  active === 1 && "text-primary font-semibold"
                }`}
              >
                Home
              </Link>
              <div
                className={`w-full h-1 bg-primary absolute -bottom-6 rounded-tl-md rounded-tr-md ${
                  active != 1 && "hidden"
                }`}
              />
            </li>
            <li className="relative flex justify-center px-5 pt-1">
              <Link
                className={`font-medium  ${
                  active === 2 && "text-primary font-semibold"
                }`}
                to="/explore"
              >
                Explore
              </Link>
              <div
                className={`w-full h-1 bg-primary absolute -bottom-6 rounded-tl-md rounded-tr-md ${
                  active != 2 && "hidden"
                }`}
              />
            </li>
            <li className="relative flex justify-center px-5 pt-1">
              <Link
                className={`font-medium ${
                  active === 3 && "text-primary font-semibold"
                }`}
                to="/bookmarks"
              >
                Bookmarks<span></span>
              </Link>
              <div
                className={`w-full h-1 bg-primary absolute -bottom-6 rounded-tl-md rounded-tr-md ${
                  active != 3 && "hidden"
                }`}
              />
            </li>
          </ul>

          {user ? (
            <div className="flex items-center gap-1">
              <img
                src={
                  user.avatar
                    ? user.avatar
                    : "https://source.unsplash.com/random/400x400"
                }
                alt="av"
                className="h-9 w-9 rounded-md"
              />
              <p className="font-bold m-0 sm:block hidden">
                {truncate(user.username)}
              </p>
              <FaAngleDown className="sm:block hidden" />
            </div>
          ) : (
            <Link
              to="/login"
              className="py-1 px-5 rounded-full flex items-center gap-1 bg-primary text-white"
            >
              <RiLoginBoxLine /> Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({ user: state.userData.user });

export default connect(mapStateToProps, null)(NavBar);
