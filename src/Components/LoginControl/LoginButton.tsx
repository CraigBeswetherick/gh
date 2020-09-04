import React from "react";
import { Button } from "@material-ui/core";

interface LoginInterface {
  onClick: Function;
}

export const LoginButton = (props: LoginInterface) => {
  return (
    <Button
      color="inherit"
      onClick={() => {
        props.onClick();
      }}
    >
      Login
    </Button>
  );
};
