import { app } from "../Utils/Firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

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
export const loginUser = (email: string, password: string) => (
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
