import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/main/Home";
import { ThemeProvider } from "styled-components";
import "./css/main.css";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  const theme = {
    font1: "Noto Sans",
    font2: "Poppins",
    color: {
      primary: "#2f80ed",
      text1: "#000",
      text2: "#4F4F4F",
      text3: "##828282",
      black: "#000",
      white: "#fff",
      danger: "#ef5350",
    },
  };
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
