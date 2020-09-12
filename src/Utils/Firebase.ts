//import * as firebase from "firebase";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2MeM2FgrjcgiTCJbJ6gaGY66hINPeV1Y",
  authDomain: "grindheadgames-7fe3e.firebaseapp.com",
  databaseURL: "https://grindheadgames-7fe3e.firebaseio.com",
  projectId: "grindheadgames-7fe3e",
  storageBucket: "grindheadgames-7fe3e.appspot.com",
  messagingSenderId: "1106027556",
  appId: "1:1106027556:web:d230ee4460dfd6b81c24b1",
  measurementId: "G-Q0ER2G98Q8",
};

export const app = firebase.initializeApp(firebaseConfig);
export const analytics = app.analytics();
export const db = app.database();

export const getUser = (uid?: string) => db.ref(`users/${uid}`);
export const getAllUsers = () => db.ref("users");
