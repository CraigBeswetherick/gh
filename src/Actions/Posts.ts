import { db } from "../Utils/Firebase";

export const POST_CREATE_REQUEST: string = "POST_CREATE_REQUEST";
export const POST_CREATE_SUCCESS: string = "POST_CREATE_SUCCESS";
export const POST_CREATE_FAILURE: string = "POST_CREATE_FAILURE";

export const POST_EDIT_REQUEST: string = "POST_EDIT_REQUEST";
export const POST_EDIT_SUCCESS: string = "POST_EDIT_SUCCESS";
export const POST_EDIT_FAILURE: string = "POST_EDIT_FAILURE";

export const POST_DELETE_REQUEST: string = "POST_DELETE_REQUEST";
export const POST_DELETE_SUCCESS: string = "POST_DELETE_SUCCESS";
export const POST_DELETE_FAILURE: string = "POST_DELETE_FAILURE";

export const POST_PUBLISH_REQUEST: string = "POST_PUBLISH_REQUEST";
export const POST_PUBLISH_SUCCESS: string = "POST_PUBLISH_SUCCESS";
export const POST_PUBLISH_FAILURE: string = "POST_PUBLISH_FAILURE";

const requestCreatePost = () => {
  return {
    type: POST_CREATE_REQUEST,
  };
};

const receivePostCreate = () => {
  return {
    type: POST_PUBLISH_SUCCESS,
  };
};

const postError = (e: string) => {
  return {
    type: POST_PUBLISH_FAILURE,
    error: e,
  };
};

const requestEditPost = () => {
  return {
    type: POST_EDIT_REQUEST,
  };
};

const receiveEditPublish = (user: any) => {
  return {
    type: POST_EDIT_SUCCESS,
    user,
  };
};

const editError = (e: string) => {
  return {
    type: POST_EDIT_FAILURE,
    error: e,
  };
};

const requestDeletePost = () => {
  return {
    type: POST_DELETE_REQUEST,
  };
};

const receiveDeletePublish = (user: any) => {
  return {
    type: POST_DELETE_SUCCESS,
    user,
  };
};

const deleteError = (e: string) => {
  return {
    type: POST_DELETE_FAILURE,
    error: e,
  };
};

const requestPublishPost = () => {
  return {
    type: POST_PUBLISH_REQUEST,
  };
};

const receivePostPublish = (user: any) => {
  return {
    type: POST_PUBLISH_SUCCESS,
    user,
  };
};

const publishError = (e: string) => {
  return {
    type: POST_PUBLISH_FAILURE,
    error: e,
  };
};

// Create Post Thunk
export const createPost = (
  title: string,
  content: string,
  userId: string,
  dispatch: Function
) => {
  dispatch(requestCreatePost());

  const postRef = db.ref("/posts");

  return postRef
    .push({
      title,
      content,
      author: userId,
    })
    .then(() => {
      dispatch(receivePostCreate());
    })
    .catch((e) => {
      dispatch(postError(e.message));
    });
};

// Edit Post Thunk
// Publish Post Thunk
// Delete Post Thunk
