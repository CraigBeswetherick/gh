import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as Constants from "../Utils/Constants";

const ProtectedRoute = ({
  component = null,
  isAuthenticated = false,
  isVerifying = false,
  key = "",
  path = "",
  exact = true,
  ...rest
}) => (
  <Route
    {...rest}
    key={key}
    path={path}
    exact={exact}
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
