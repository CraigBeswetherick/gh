import React, { useState } from "react";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../Actions/index";
import * as Constants from "../../Utils/Constants";
import { store } from "../../Root";

interface LoginProps {
  loginError: null;
  user: any;
  password: string;
  isAuthenticated: boolean;
  isLoggingIn: boolean;
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState(props.user.email || "");
  const [password, setPassword] = useState(props.password);

  const handleSubmit = () => {
    if (props.isLoggingIn) {
      return;
    }
    loginUser(email, password, store.dispatch);
  };

  const handleEmailChange = (e: any) => {
    if (props.isLoggingIn) {
      return;
    }

    //setEmail
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    if (props.isLoggingIn) {
      return;
    }

    setPassword(e.target.value);
  };

  const handleLoginError = (e: any) => {
    console.log("login error ", e);
    // setloginError(e);
    // setIsLoggingIn(false);
  };
  console.log("rendering login page");
  if (props.isAuthenticated) {
    console.log("login page redirecting");
    return <Redirect to={Constants.PAGE_ADMIN_URL} />;
  } else {
    return (
      <LoginView
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        loginError={props.loginError}
        email={email}
        password={password}
      />
    );
  }
};

function mapStateToProps(state: any) {
  return {
    isLoggingIn: state.Auth.isLoggingIn,
    loginError: state.Auth.loginError,
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
  };
}

export default connect(mapStateToProps)(Login);
