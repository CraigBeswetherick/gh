import React, { Component, useState } from "react";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../Actions/index";
import * as Constants from "../../Utils/Constants";
import { store } from '../../Utils/Store;

const Login: React.FC = () => {
  //CREATE STATE FOR EMAIL, PASSOWRD, ISAUTH, ERROR

  const [loginError, setloginError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    dispatch(loginUser(email, password));
  };

  const handleEmailChange = ({ target }) => {};

  const handlePasswordChange = ({ target }) => {};

  if (isAuthenticated) {
    return <Redirect to={Constants.PAGE_ADMIN_URL} />;
  } else {
    return (
      <LoginView
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
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
