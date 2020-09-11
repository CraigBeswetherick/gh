import React from "react";
import { Button } from "@material-ui/core";

interface LoginInterface {
  onClick: Function;
  disabled: boolean;
}

export const LoginButton = (props: LoginInterface) => {
  return (
    <Button
      color="inherit"
      disabled={props.disabled}
      onClick={() => {
        props.onClick();
      }}
    >
      Login
    </Button>
  );
};
