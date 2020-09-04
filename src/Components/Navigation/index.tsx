import React from "react";
import NavigationView from "./NavigationView";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
  // we need to access the store here.

  const location = useLocation();
  let currentPage: string = location.pathname.substr(
    1,
    location.pathname.length - 1
  );

  currentPage = currentPage.toLocaleUpperCase();

  return <NavigationView isLoggedIn={true} currentPage={currentPage} />;
};

export default Navigation;
