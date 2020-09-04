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

//**  Constants  **//
import {
  PAGE_ABOUT_URL,
  PAGE_ADMIN_URL,
  PAGE_BLOG_URL,
  PAGE_PORTFOLIO_URL,
  PAGE_HOME_URL,
} from "./Utils/Constants";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
        <Router history={history}>
          <Switch>
            <Route path={PAGE_ABOUT_URL}>
              <About />
            </Route>
            <Route path={PAGE_ADMIN_URL}>
              <Admin />
            </Route>
            <Route path={PAGE_BLOG_URL}>
              <Blog />
            </Route>
            <Route path={PAGE_PORTFOLIO_URL}>
              <Portfolio />
            </Route>
            <Route path={PAGE_HOME_URL}>
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
