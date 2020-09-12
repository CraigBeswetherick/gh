import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as Constants from "../Utils/Constants";

interface InterfaceProtectedRoute {
  component: Function;
  isAuthenticated: boolean;
  path: string;
  exact: boolean;
  isProtected: boolean;
}

const ProtectedRoute = (props: InterfaceProtectedRoute) => {
  if (props.isAuthenticated && props.isProtected) {
    return (
      <Route
        key={props.path}
        path={props.path}
        exact={props.exact}
        component={props.component()}
      />
    );
  } else if (!props.isProtected) {
    return (
      <Route
        key={props.path}
        path={props.path}
        exact={props.exact}
        component={props.component()}
      />
    );
  } else {
    console.log("rendering redirect");
    // return <Redirect to={Constants.PAGE_LOGIN_URL} />;
    return <div></div>;
  }
};

export default ProtectedRoute;
