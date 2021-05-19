import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
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
    <nav>
      <Container>
        <SpaceOut>
          <img src={logo1} alt="" />

          <MainNav active={active}>
            <li>
              <Link to="/">
                Home <span></span>
              </Link>
            </li>
            <li>
              <Link to="/explore">
                Explore<span></span>
              </Link>
            </li>
            <li>
              <Link to="/bookmarks">
                Bookmarks<span></span>
              </Link>
            </li>
          </MainNav>

          {user ? (
            <FlexGap gap={5} align="center" cursor="pointer">
              <img
                src={
                  user.avatar
                    ? user.avatar
                    : "https://source.unsplash.com/random/400x400"
                }
                alt="av"
                style={{ height: "35px", width: "35px", borderRadius: "4px" }}
              />
              <Text weight={700} margin={0}>
                {user.username}
              </Text>
              <FaAngleDown />
            </FlexGap>
          ) : (
            <ButtonLink to="/login" padding="5px 20px" br="20px">
              <RiLoginBoxLine /> Sign In
            </ButtonLink>
          )}
        </SpaceOut>
      </Container>
    </nav>
  );
};

const mapStateToProps = (state) => ({ user: state.userData.user });

export default connect(mapStateToProps, null)(NavBar);
