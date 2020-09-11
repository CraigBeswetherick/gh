import { app } from "../Utils/Firebase";

import * as Constants from "../Utils/Constants";
import history from "../Utils/History";
import { Store } from "redux";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const CHANGE_EMAIL_REQUEST = "CHANGE_EMAIL_REQUEST";
export const CHANGE_EMAIL_SUCCESS = "CHANGE_EMAIL_SUCCESS";
export const CHANGE_EMAIL_FAILURE = "CHANGE_EMAIL_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

// Login
const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const receiveLogin = (user: any) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

const loginError = (e: any) => {
  return {
    type: LOGIN_FAILURE,
    error: e,
  };
};

//Logout
const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

const receiveLogout = () => {
  history.push(Constants.PAGE_LOGOUT_URL);

  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutError = (e: any) => {
  return {
    type: LOGOUT_FAILURE,
    error: e,
  };
};

//verify
const requestVerify = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

const receiveVerify = (user: any) => {
  return {
    type: VERIFY_SUCCESS,
    user,
  };
};

// Login user thunk
export const loginUser = (
  email: string,
  password: string,
  dispatch: Function
) => {
  dispatch(requestLogin());

  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(receiveLogin(user));
      console.log("auth logged in thunk success");
    })
    .catch((error) => {
      dispatch(loginError(error));
    });
};

// Logout user thunk
export const logoutUser = (dispatch: Function) => {
  dispatch(requestLogout());
  app
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch((e: any) => {
      dispatch(logoutError(e));
    });
};

// Verify user thunk
export const verifyAuth = (store: Store) => {
  store.dispatch(requestVerify());

  app.auth().onAuthStateChanged((user: any) => {
    if (user !== null) {
      store.dispatch(receiveLogin(user));
      store.dispatch(receiveVerify(user));
      console.log("Logged in user");
    }
  });
};
