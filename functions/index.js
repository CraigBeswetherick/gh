const createUser = () =>
  functions.auth
    .user()
    .actions.auth.user()
    .onCreate(async (user) => {
      return admin.database().ref(`/users/${user.uid}`).update({
        registeredDate: new Date().toISOString(),
      });
    });

const createPost = () =>
  functions.auth.user().onCreate(async (post) => {
    //create a ref to the posts on the user
    //create a ref to the author on the post
  });

exports.createUser = createUser;
exports.createPost = createPost;
