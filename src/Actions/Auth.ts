import { app, getUser } from "../Utils/Firebase";

import * as Constants from "../Utils/Constants";
import history from "../Utils/History";
import { Store } from "redux";

export const REGISTER_REQUEST: string = "REGISTER_REQUEST";
export const REGISTER_SUCCESS: string = "REGISTER_SUCCESS";
export const REGISTER_FAILURE: string = "REGISTER_FAILURE";

export const LOGIN_REQUEST: string = "LOGIN_REQUEST";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_FAILURE: string = "LOGIN_FAILURE";

export const LOGOUT_REQUEST: string = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: string = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE: string = "LOGOUT_FAILURE";

export const CHANGE_EMAIL_REQUEST: string = "CHANGE_EMAIL_REQUEST";
export const CHANGE_EMAIL_SUCCESS: string = "CHANGE_EMAIL_SUCCESS";
export const CHANGE_EMAIL_FAILURE: string = "CHANGE_EMAIL_FAILURE";

export const VERIFY_REQUEST: string = "VERIFY_REQUEST";
export const VERIFY_SUCCESS: string = "VERIFY_SUCCESS";

// Login
const requestRegister = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

const receiveRegister = (user: any) => {
  return {
    type: REGISTER_SUCCESS,
    user,
  };
};

export const registerError = (e: string) => {
  return {
    type: REGISTER_FAILURE,
    error: e,
  };
};

// Login
const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const receiveLogin = (user: any) => {
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

export const receiveVerify = (user: any) => {
  return {
    type: VERIFY_SUCCESS,
    user,
  };
};

// Register user thunk
export const registerUser = (
  email: string,
  password: string,
  dispatch: Function
) => {
  dispatch(requestRegister());

  app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return getUser(user.user?.uid).set({ email }, () => {
        dispatch(receiveRegister(user));
      });
    })
    .catch((e) => {
      dispatch(registerError(e.message));
    });
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
    })
    .catch((error) => {
      dispatch(loginError(error));
    });
};

// Logout user thunk
export const logoutUser = (dispatch: Function) => {
  dispatch(requestLogout());
  return app
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
export function verifyAuth(store: Store): Store {
  store.dispatch(requestVerify());

  app.auth().onAuthStateChanged((user: any) => {
    if (user !== null) {
      store.dispatch(receiveLogin(user));
      store.dispatch(receiveVerify(user));
    }
  });

  return store;
}
