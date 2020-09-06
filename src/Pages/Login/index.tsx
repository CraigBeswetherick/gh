import React, { Component } from "react";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../Actions/index";
import * as Constants from "../../Utils/Constants";

const Login: React.FC = (props) => {
  const { loginError, isAuthenticated } = this.props;

  const handleSubmit = () => {
    const { dispatch } = props;
    const { email: string, password: string } = this.state;
    dispatch(loginUser(user, password));
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
