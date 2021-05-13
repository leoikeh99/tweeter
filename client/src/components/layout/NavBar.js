import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo1 from "../../images/logo1.svg";
import {
  Container,
  FlexGap,
  SpaceOut,
  Text,
  MainNav,
} from "../styled_components/components";

const NavBar = ({ match }) => {
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

          <FlexGap gap={5}>
            <img src="" alt="av" />
            <Text weight={700} margin={0}>
              Leonard
            </Text>
          </FlexGap>
        </SpaceOut>
      </Container>
    </nav>
  );
};

export default NavBar;
