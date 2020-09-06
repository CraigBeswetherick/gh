import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";

import { withStyles } from "@material-ui/styles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff",
    },
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057",
  },
  form: {
    marginTop: 1,
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center",
  },
});

interface LoginViewInterface {
  handleEmailChange: Function;
  handlePasswordChange: Function;
  handleSubmit: Function;
  loginError?: any;
}

const LoginView: React.FC = (props: LoginViewInterface) => {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="page">
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={() => props.handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={() => props.handlePasswordChange}
            />
            {loginError && (
              <Typography component="p" className={classes.errorText}>
                Incorrect email or password.
              </Typography>
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => props.handleSubmit}
            >
              Sign In
            </Button>
          </Paper>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default LoginView;
