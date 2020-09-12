import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Navigation from "../../Components/Navigation";

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

interface RegisterViewInterface {
  handleEmailChange: Function;
  handlePasswordChange: Function;
  handlePasswordConfirmChange: Function;
  handleSubmit: Function;
  registerError?: any;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

const RegisterView: React.FC<RegisterViewInterface> = (
  props: RegisterViewInterface
) => {
  const { registerError } = props;
  const classes = styles();

  console.log(registerError);

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
              Register new account
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

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  defaultValue={props.passwordConfirm}
                  name="password-confirm"
                  label="Password confirm"
                  type="password"
                  id="password-confirm"
                  onChange={(e: any) => props.handlePasswordConfirmChange(e)}
                />

                {registerError && (
                  <Typography component="p" className={classes.errorText}>
                    {registerError}
                  </Typography>
                )}
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e: any) => props.handleSubmit(e)}
                >
                  Register Account
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

export default RegisterView;
