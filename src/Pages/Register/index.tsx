import React, { useState, useEffect } from "react";
import RegisterView from "./RegisterView";
import { connect } from "react-redux";
import { registerUser, registerError } from "../../Actions/index";
import { store } from "../../index";

interface RegisterProps {
  registerError: null;
  user: any;
  password: string;
  passwordConfirm: string;
  isAuthenticated: boolean;
  isLoggingIn: boolean;
}

const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const [email, setEmail] = useState(props.user.email || "");
  const [password, setPassword] = useState(props.password);
  const [passwordConfirm, setPasswordConfirm] = useState(props.passwordConfirm);

  useEffect(() => {
    if (props.isAuthenticated) {
      window.location.href = "/admin";
    }
  }, [props.isAuthenticated]);

  const handlePasswordChange = (e: any) => {
    if (props.isLoggingIn) {
      return;
    }

    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e: any) => {
    if (props.isLoggingIn) {
      return;
    }

    setPasswordConfirm(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    if (props.isLoggingIn) {
      return;
    }

    //setEmail
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (props.isLoggingIn) {
      return;
    }

    if (password !== passwordConfirm) {
      store.dispatch(registerError("Passwords do not match."));
      return;
    }

    registerUser(email, password, store.dispatch);
  };

  return (
    <RegisterView
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handlePasswordConfirmChange={handlePasswordConfirmChange}
      handleSubmit={handleSubmit}
      registerError={props.registerError}
      email={email}
      password={password}
    />
  );
};

function mapStateToProps(state: any) {
  return {
    isLoggingIn: state.Auth.isLoggingIn,
    registerError: state.Auth.registerError,
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
  };
}

export default connect(mapStateToProps)(Register);
