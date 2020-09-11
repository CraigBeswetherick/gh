import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as Constants from "../Utils/Constants";

const ProtectedRoute = ({
  component = null,
  isAuthenticated = false,
  isVerifying = false,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: any) =>
      isVerifying ? (
        <div />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: Constants.PAGE_LOGIN_URL,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
export default ProtectedRoute;
