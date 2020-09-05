"use-strict";

const Button = {
  root: {
    backgroundColor: "black",

    "&:hover": {
      backgroundColor: "red",
    },
  },
  textPrimary: {
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "red",
    },
  },
};

export default Button;
