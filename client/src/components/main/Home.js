import React, { Fragment, useEffect, useState } from "react";
import Profile from "./Profile";
import Timeline from "./Timeline";
import { Link, useHistory } from "react-router-dom";
import qs from "qs";

const Home = () => {
  const [type, setType] = useState("feed");
  const history = useHistory();
  useEffect(() => {
    setType(qs.parse(history.location.search.substring(1)).type);
    return history.listen((location) => {
      setType(qs.parse(history.location.search.substring(1)).type);
    });
  }, [history]);
  return (
    <Fragment>{type === "timeline" ? <Timeline /> : <Profile />}</Fragment>
  );
};

export default Home;
