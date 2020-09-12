import React from "react";

import { Provider } from "react-redux";

import App from "./App";
import configureStore from "./Utils/Store";

export const store = configureStore({
  Auth: { isAuthenticated: false, isVerfifying: false, user: {} },
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
