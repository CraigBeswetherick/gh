import React, { useState } from "react";
import CreatePostView from "./CreatePostView";

const CreatePost: React.FC = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleSubmit = () => {};

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

export default CreatePost;
