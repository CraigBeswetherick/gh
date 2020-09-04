import React from "react";
import { Button } from "@material-ui/core";

interface LogoutInterface {
  onClick: Function;
}

export const LogoutButton = (props: LogoutInterface) => {
  return (
    <Button
      color="inherit"
      onClick={() => {
        props.onClick();
      }}
    >
      Logout
    </Button>
  );
};
