import React, { ComponentClass, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as Constants from "./Constants";

interface ProtectedRouteProps {
  component: ComponentClass;
  isAuthenticated: boolean;
  isVerifying: boolean;
  key: string;
  path: string;
  exact: boolean;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  return (
    <Route
      render={(props) => (
        <div>
          isVerifying ? ( <div /> ) : isAuthenticated ? (
          <Component {...props} /> ) : (
          <Redirect
            to={{
              pathname: Constants.PAGE_HOME_URL,
              state: { from: props.location },
            }}
          />
          )
        </div>
      )}
    />
  );
};

export default ProtectedRoute;
