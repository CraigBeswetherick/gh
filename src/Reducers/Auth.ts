import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "../Actions/";

interface Action {
  type: string;
  user?: firebase.User;
  error?: any;
}

export default (
  state = {
    isLoggingIn: false,
    isLoggingOut: false,
    isVerifying: false,
    registerError: null,
    loginError: null,
    logoutError: null,
    isAuthenticated: false,
    user: {},
  },
  action: Action
) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        registerError: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        registerError: false,
        loginError: false,
        isAuthenticated: true,
        user: action.user,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        registerError: action.error,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        loginError: false,
        isAuthenticated: true,
        user: action.user,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loginError: action.error,
      };

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: null,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        user: {},
        isAuthenticated: false,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        logoutError: action.error,
        isLoggingOut: false,
      };

    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
      };

    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };

    default:
      return state;
  }
};
