import React from "react";
import { Route } from "react-router-dom";

interface InterfaceProtectedRoute {
  component: Function;
  isAuthenticated: boolean;
  path: string;
  exact: boolean;
  isProtected: boolean;
}

const ProtectedRoute = (props: InterfaceProtectedRoute) => {
  console.log(props.isAuthenticated && props.isProtected);

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
    console.log("rendering redirect?");
    return <div></div>;
  }
};

export default ProtectedRoute;
