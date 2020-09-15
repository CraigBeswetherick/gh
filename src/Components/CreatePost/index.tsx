import React, { useState } from "react";
import CreatePostView from "./CreatePostView";
import { connect } from "react-redux";
import * as Actions from "../../Actions";
import { store } from "../../index";
import { User } from "firebase";
import { Typography } from "@material-ui/core";
import { PAGE_ADMIN_URL } from "../../Utils/Constants";

interface InterfaceCreatePost {
  user: User;
}

const CreatePost: React.FC<InterfaceCreatePost> = (
  props: InterfaceCreatePost
) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log('user', props.user)

  let email = props.user.email || '';

  const handleSubmit = () => {
    setIsLoading(true);
    Actions.createPost(
      postTitle,
      postContent,
      props.user.uid,
      store.dispatch,
      email,
    ).then(() => {
      setIsLoading(false);
      window.location.href = PAGE_ADMIN_URL;
    });
  };

  if (isLoading) {
    return (
      <div>
        <Typography variant="h2">Loading...</Typography>
      </div>
    );
  }

  return (
    <CreatePostView
      postTitle={postTitle}
      setPostTitle={setPostTitle}
      postContent={postContent}
      setPostContent={setPostContent}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
};

function mapStateToProps(state: any) {
  return {
    user: state.Auth.user,
  };
}

export default connect(mapStateToProps)(CreatePost);
