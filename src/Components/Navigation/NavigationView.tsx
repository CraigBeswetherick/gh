import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { LoginControl } from "../LoginControl";
import { Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import * as Constants from "../../Utils/Constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface ButtonAppBarInterface {
  currentPage: string;
  isLoggingIn: boolean;
  isAuthenticated: boolean;
}

export default function ButtonAppBar(props: ButtonAppBarInterface) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e: any) => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link href={Constants.PAGE_HOME_URL}>
              <MenuItem onClick={handleClose}>
                {Constants.PAGE_HOME_LABEL}
              </MenuItem>
            </Link>
            <Link href={Constants.PAGE_ABOUT_URL}>
              <MenuItem onClick={handleClose}>
                {Constants.PAGE_ABOUT_LABEL}
              </MenuItem>
            </Link>
            <Link href={Constants.PAGE_PORTFOLIO_URL}>
              <MenuItem onClick={handleClose}>
                {Constants.PAGE_PORTFOLIO_LABEL}
              </MenuItem>
            </Link>
            <Link href={Constants.PAGE_BLOG_URL}>
              <MenuItem onClick={handleClose}>
                {Constants.PAGE_BLOG_LABEL}
              </MenuItem>
            </Link>
            <Link href={Constants.PAGE_ADMIN_URL}>
              <MenuItem onClick={handleClose}>
                {Constants.PAGE_ADMIN_LABEL}
              </MenuItem>
            </Link>
          </Menu>

          <Typography variant="h6" className={classes.title}>
            {props.currentPage}
          </Typography>

          <LoginControl
            isLoggingIn={props.isLoggingIn}
            isAuthenticated={props.isAuthenticated}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
