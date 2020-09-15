import React, { useState } from "react";
import CreatePostView from "./CreatePostView";
import { connect } from "react-redux";
import * as Actions from "../../Actions";
import { store } from "../../index";
import { User } from "firebase";

interface InterfaceCreatePost {
  user: User;
}

const CreatePost: React.FC<InterfaceCreatePost> = (
  props: InterfaceCreatePost
) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    Actions.createPost(postTitle, postContent, props.user.uid, store.dispatch);
  };

  return (
    <CreatePostView
      postTitle={postTitle}
      setPostTitle={setPostTitle}
      postContent={postContent}
      setPostContent={setPostContent}
      handleSubmit={handleSubmit}
    />
  );
};

function mapStateToProps(state: any) {
  return {
    user: state.Auth.user,
  };
}

export default connect(mapStateToProps)(CreatePost);
