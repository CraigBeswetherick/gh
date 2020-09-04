import React from "react";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";

interface LoginControlProps {
  isLoggedIn: boolean;
}

export const LoginControl = (props: LoginControlProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(props.isLoggedIn);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  return <div>{button}</div>;
};
