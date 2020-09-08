//**  Constants  **//
import * as Constants from "./Constants";

//**  Pages  **//
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import Portfolio from "../Pages/Portfolio";
import Admin from "../Pages/Admin";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Logout from "../Pages/Logout";

export const ProtectedRoutes = [
  {
    name: Constants.PAGE_ADMIN_LABEL,
    path: Constants.PAGE_ADMIN_URL,
    exact: true,
    main: () => Admin,
  },
];

export const Routes = [
  {
    name: Constants.PAGE_HOME_LABEL,
    path: Constants.PAGE_HOME_URL,
    exact: true,
    main: () => Homepage,
  },
  {
    name: Constants.PAGE_ABOUT_LABEL,
    path: Constants.PAGE_ABOUT_URL,
    exact: true,
    main: () => About,
  },
  {
    name: Constants.PAGE_BLOG_LABEL,
    path: Constants.PAGE_BLOG_URL,
    exact: true,
    main: () => Blog,
  },
  {
    name: Constants.PAGE_PORTFOLIO_LABEL,
    path: Constants.PAGE_PORTFOLIO_URL,
    exact: true,
    main: () => Portfolio,
  },
  {
    name: Constants.PAGE_LOGIN_LABEL,
    path: Constants.PAGE_LOGIN_URL,
    exact: true,
    main: () => Login,
  },
  {
    name: Constants.PAGE_REGISTER_LABEL,
    path: Constants.PAGE_REGISTER_URL,
    exact: true,
    main: () => Register,
  },
  {
    name: Constants.PAGE_LOGOUT_LABEL,
    path: Constants.PAGE_LOGOUT_URL,
    exact: true,
    main: () => Logout,
  },
];
