import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const BottomNav = () => {
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
    <div className="fixed bottom-0 left-0 w-full bg-white px-3 py-2 md:hidden">
      <div className="max-w-md m-auto">
        <ul className="flex items-center justify-center">
          <li>
            <Link
              className={"hover:bg-gray5 py-2 px-9 rounded-md block relative"}
              to="/"
            >
              <i
                className={`fas fa-home text-xl ${
                  active === 1 ? "text-primary" : "text-gray3"
                }`}
              ></i>
              <div
                className={`w-full h-1 bg-primary absolute -bottom-2 left-0 rounded-tl-md rounded-tr-md ${
                  active != 1 && "hidden"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-gray5 py-2 px-9 rounded-md block relative"
              to="/explore"
            >
              <i
                className={`fas fa-compass text-xl ${
                  active === 2 ? "text-primary" : "text-gray3"
                }`}
              ></i>
              <div
                className={`w-full h-1 bg-primary absolute -bottom-2 left-0 rounded-tl-md rounded-tr-md ${
                  active != 2 && "hidden"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-gray5 py-2 px-9 rounded-md block relative"
              to="/bookmarks"
            >
              <i
                className={`fas fa-bookmark text-xl ${
                  active === 3 ? "text-primary" : "text-gray3"
                }`}
              ></i>
              <div
                className={`w-full h-1 bg-primary absolute -bottom-2 left-0 rounded-tl-md rounded-tr-md ${
                  active != 3 && "hidden"
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
