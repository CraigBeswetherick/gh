import React from "react";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";
import { logoutUser } from "../../Actions";
import { store } from "../../Root";
import * as Constants from "../../Utils/Constants";

interface LoginControlProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
}

export const LoginControl = (props: LoginControlProps) => {
  const handleLoginClick = () => {
    window.location.href = Constants.PAGE_LOGIN_URL;
  };

  const handleLogoutClick = () => {
    logoutUser(store.dispatch).then(() => {
      window.location.href = Constants.PAGE_HOME_URL;
    });
  };

  const button = props.isAuthenticated ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} disabled={props.isLoggingIn} />
  );

  return <div>{button}</div>;
};
