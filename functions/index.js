// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.createUser = functions.auth.user().onCreate(async (user) => {
  return admin.database().ref(`/users/${user.uid}`).update({
    registeredDate: new Date().toISOString(),
  });
});
