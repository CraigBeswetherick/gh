import React from "react";
import NavigationView from "./NavigationView";

export const Navigation = () => {
  // we need to access the store here.

  return <NavigationView isLoggedIn={true} currentPage={"home"} />;
};

export default Navigation;
