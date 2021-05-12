import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/main/Home";
import { ThemeProvider } from "styled-components";
import "./css/main.css";

function App() {
  const theme = {
    font1: "Noto Sans",
    font2: "Poppins",
  };
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Fragment>
              <NavBar />
              <Route exact path="/" component={Home} />
            </Fragment>
          </Switch>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
