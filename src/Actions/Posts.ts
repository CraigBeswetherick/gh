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

// Login
const requestCreatePost = () => {
  return {
    type: POST_CREATE_REQUEST,
  };
};

const receivePostPublish = (user: any) => {
  return {
    type: POST_PUBLISH_SUCCESS,
    user,
  };
};

const postError = (e: string) => {
  return {
    type: POST_PUBLISH_FAILURE,
    error: e,
  };
};
