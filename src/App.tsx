import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./Theme/Theme";
import { Switch, Route, Router } from "react-router-dom";
import "./App.scss";

//**  Pages  **//
import About from "./Pages/About";
import Homepage from "./Pages/Homepage";
import Portfolio from "./Pages/Portfolio";
import Admin from "./Pages/Admin";
import Blog from "./Pages/Blog";
import history from "./Utils/History";
import Login from "./Pages/Login";

//**  Constants  **//
import * as Constants from "./Utils/Constants";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
        <Router history={history}>
          <Switch>
            <Route path={Constants.PAGE_ABOUT_URL}>
              <About />
            </Route>
            <Route path={Constants.PAGE_ADMIN_URL}>
              <Admin />
            </Route>
            <Route path={Constants.PAGE_BLOG_URL}>
              <Blog />
            </Route>
            <Route path={Constants.PAGE_PORTFOLIO_URL}>
              <Portfolio />
            </Route>
            <Route path={Constants.PAGE_HOME_URL}>
              <Homepage />
            </Route>
            <Route path={Constants.PAGE_LOGIN_URL}>
              <Login />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
