"use-strict";

import { createMuiTheme } from "@material-ui/core/styles";
import FormControl from "./FormControl";
import Typography from "./Typography";
import TextField from "./TextField";
import InputBase from "./InputBase";
import Button from "./Button";
import Container from "./Container";
import SVGIcon from "./SVGIcon";
import MuiAppBar from "./AppBar";

const Theme = createMuiTheme({
  overrides: {
    MuiTextField: TextField,
    MuiTypography: Typography,
    MuiFormControl: FormControl,
    MuiInputBase: InputBase,
    MuiButton: Button,
    MuiContainer: Container,
    MuiSvgIcon: SVGIcon,
    MuiAppBar: MuiAppBar,
  },
});

export default Theme;
