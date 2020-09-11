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
  console.log(props.isAuthenticated, "route");
  if (props.isAuthenticated) {
    console.log("rendering admin");
    return (
      <Route
        key={props.key}
        path={props.path}
        exact={props.exact}
        component={props.component()}
      />
    );
  } else {
    console.log("rendering redirect");
    return <Redirect to={Constants.PAGE_LOGIN_URL} />;
  }
};

export default ProtectedRoute;
