import React, { useState } from "react";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../Actions/index";
import * as Constants from "../../Utils/Constants";
import { store } from "../../Root";

interface LoginProps {
  loginError: null;
  email: string;
  password: string;
  isAuthenticated: boolean;
  isLoggingIn: boolean;
}

const Login = (props: LoginProps) => {
  const [loginError, setloginError] = useState(props.loginError);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [isAuthenticated, setIsAuthenticated] = useState(props.isAuthenticated);
  const [isLoggingIn, setIsLoggingIn] = useState(props.isLoggingIn);

  const handleSubmit = () => {
    if (isLoggingIn) {
      return;
    }

    setIsLoggingIn(true);
    loginUser(email, password, store.dispatch);
  };

  const handleEmailChange = ({ target }: any) => {
    if (isLoggingIn) {
      return;
    }

    console.log(target);

    //setEmail
    setEmail(target);
  };

  const handlePasswordChange = ({ target }: any) => {
    if (isLoggingIn) {
      return;
    }

    setPassword(target);
    console.log(target);

    // setPassword
    setPassword(target);
  };

  const handleLoginError = ({ error }: any) => {
    setIsLoggingIn(false);
    console.log("login error ", error);
    setloginError(error);
    setIsLoggingIn(false);
  };

  const handleAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
    setIsLoggingIn(false);
  };

  if (isAuthenticated) {
    return <Redirect to={Constants.PAGE_ADMIN_URL} />;
  } else {
    return (
      <LoginView
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        loginError={loginError}
      />
    );
  }
};

function mapStateToProps(state: any) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Login);
