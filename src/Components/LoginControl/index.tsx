import React from "react";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";

interface LoginControlProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
}

export const LoginControl = (props: LoginControlProps) => {
  const [isLoggingIn, setIsLoggingIn] = React.useState(props.isLoggingIn);
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    props.isAuthenticated
  );

  const handleLoginClick = () => {
    if (isLoggingIn) {
      return;
    }

    setIsLoggingIn(true);
  };

  const handleLogoutClick = () => {
    if (isLoggingIn) {
      return;
    }
  };

  const button = isAuthenticated ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} disabled={props.isLoggingIn} />
  );

  return <div>{button}</div>;
};
