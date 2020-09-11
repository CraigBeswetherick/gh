import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import configureStore from "./Utils/Store";

export const store = configureStore({
  Auth: { isAuthenticated: false, isVerfifying: false, user: {} },
});

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

export default Root;
