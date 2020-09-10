import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./Theme/Theme";
import { connect } from "react-redux";
import { Switch, Route, Router } from "react-router-dom";
import "./App.scss";

// Utils
import history from "./Utils/History";
import { Routes, ProtectedRoutes } from "./Utils/Routes";
import ProtectedRoute from "./Utils/ProtectedRoute";

// Init Firebase
import "./Utils/Firebase";

interface AppProps {
  isAuthenticated: boolean;
  isVerifying: boolean;
}

function App(props: AppProps) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
        <Router history={history}>
          <Switch>
            {Routes.map((route: any) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main()}
              />
            ))}

            {ProtectedRoutes.map((route: any) => (
              <ProtectedRoute
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main()}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
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
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}

export default connect(mapStateToProps)(App);
