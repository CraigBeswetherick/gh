import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./Theme/Theme";
import { connect } from "react-redux";
import { Switch, Router } from "react-router-dom";
import "./App.scss";

// Utils
import history from "./Utils/History";
import { Routes } from "./Utils/Routes";
import ProtectedRoute from "./Utils/ProtectedRoute";

// Init Firebase
import "./Utils/Firebase";

interface AppProps {
  isAuthenticated: boolean;
}

function App(props: AppProps) {
  const { isAuthenticated } = props;

  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
        <Router history={history}>
          <Switch>
            {Routes.map((route: any) => (
              <ProtectedRoute
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
                isProtected={route.isProtected}
                isAuthenticated={isAuthenticated}
              />
            ))}
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state.Auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(App);
