// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.createUser = functions.auth.user().onCreate((userRecord, context) => {
  return admin.database().ref(`/users/${userRecord.data.uid}`).set({
    registeredDate: new Date().toJSON(),
  });
});
