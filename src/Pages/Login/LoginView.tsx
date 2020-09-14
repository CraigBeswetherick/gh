import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";
import { PAGE_REGISTER_LABEL, PAGE_REGISTER_URL } from "../../Utils/Constants";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
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
  submit: {},
});

interface LoginViewInterface {
  handleEmailChange: Function;
  handlePasswordChange: Function;
  handleSubmit: Function;
  loginError?: any;
  email?: string;
  password?: string;
}

const LoginView = (props: LoginViewInterface) => {
  const { loginError } = props;
  const classes = styles();

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
            <FormControl>
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  defaultValue={props.email}
                  onChange={(e: any) => props.handleEmailChange(e)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  defaultValue={props.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e: any) => props.handlePasswordChange(e)}
                />
                {loginError && (
                  <Typography component="p" className={classes.errorText}>
                    Incorrect email or password.
                  </Typography>
                )}
                <a href={PAGE_REGISTER_URL}>
                  <Typography component="h3">{PAGE_REGISTER_LABEL}</Typography>
                </a>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e: any) => props.handleSubmit(e)}
                >
                  Sign In
                </Button>
              </form>
            </FormControl>
          </Paper>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default LoginView;
