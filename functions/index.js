const functions = require("firebase-functions");

const createUser = functions.auth.user().onCreate((user) => {
  return admin.database().ref(`/users/${user.uid}`).update({
    registeredDate: new Date().toISOString(),
  });
});

const createPost = functions.auth.user().onCreate((post) => {
  //create a ref to the posts on the user
  //create a ref to the author on the post
});

exports.createUser = createUser;
exports.createPost = createPost;
