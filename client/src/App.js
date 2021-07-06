import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import BottomNav from "./components/layout/BottomNav";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/main/Home";
import Explore from "./components/main/Explore";
import Bookmarks from "./components/main/Bookmarks";
import Profile from "./components/main/Profile";
import Timeline from "./components/main/Timeline";
import { ThemeProvider } from "styled-components";
import "./css/main.css";
import store from "./store";
import { Provider } from "react-redux";
import { MainContainer } from "./components/styled_components/components";
import Alerts from "./components/layout/Alerts";

function App() {
  const theme = {
    font1: "Noto Sans",
    font2: "Poppins",
    color: {
      primary: "#2f80ed",
      text1: "#000",
      text2: "#4F4F4F",
      text3: "#828282",
      text4: "#333",
      text5: "#BDBDBD",
      text6: "#999",
      text7: "#E0E0E0",
      white: "#fff",
      danger: "#ef5350",
      success: "#1de9b6",
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
              <Route exact path="/profile/:id" component={Profile} />
              <MainContainer>
                <Alerts
                  exact
                  path={["/", "/profile/:id", "/explore", "/bookmarks"]}
                  component={NavBar}
                />
                <Route exact path="/" component={Timeline} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/bookmarks" component={Bookmarks} />
              </MainContainer>
              <BottomNav />
            </Fragment>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
