import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as Constants from "../Utils/Constants";

interface InterfaceProtectedRoute {
  component: Function;
  isAuthenticated: boolean;
  isVerifying: boolean;
  key: string;
  path: string;
  exact: boolean;
}

const ProtectedRoute = (props: InterfaceProtectedRoute) => {
  console.log(props.isAuthenticated, " route");
  if (props.isAuthenticated) {
    console.log("rending admin");
    return (
      <Route
        key={props.key}
        path={props.path}
        exact={props.exact}
        component={props.component()}
      />
    );
  } else {
    console.log("rending redirect");
    return (
      <Redirect
        to={{
          pathname: Constants.PAGE_LOGIN_URL,
          state: { from: window.location.href },
        }}
      />
    );
  }
};

export default ProtectedRoute;
