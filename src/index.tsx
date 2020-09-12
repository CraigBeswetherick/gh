import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./Utils/Store";
import { app } from "./Utils/Firebase";
import { receiveLogin, receiveVerify } from "./Actions";

export const store = configureStore({
  Auth: { isAuthenticated: false, isVerfifying: false, user: {} },
});

app.auth().onAuthStateChanged((user: any) => {
  if (user !== null) {
    // history.push("/admin");
    store.dispatch(receiveLogin(user));
    store.dispatch(receiveVerify(user));
  }

  ReactDOM.render(<Root />, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
