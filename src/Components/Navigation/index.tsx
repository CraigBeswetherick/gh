import React from "react";
import NavigationView from "./NavigationView";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

interface NavigationProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
}

export const Navigation = (props: NavigationProps) => {
  // we need to access the store here to evaluate if logged in.

  const location = useLocation();
  let currentPage: string = location.pathname.substr(
    1,
    location.pathname.length - 1
  );

  currentPage = currentPage.toLocaleUpperCase();

  return (
    <NavigationView
      isLoggingIn={props.isLoggingIn}
      isAuthenticated={props.isAuthenticated}
      currentPage={currentPage}
    />
  );
};

function mapStateToProps(state: any) {
  return {
    isLoggingIn: state.Auth.isLoggingIn,
    isAuthenticated: state.Auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Navigation);
