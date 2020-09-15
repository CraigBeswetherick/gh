import React, { useState, useEffect } from "react";
import PostListView from "./PostListView";
import { getPostList } from "../../Utils/Firebase";

const PostList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getPostList().on("value", (snapshot: any) => {
      setIsLoading(false);
      const posts: any = Object.entries(snapshot.val());
      setPostList(posts);
    });
  }, []);

  return <PostListView postList={postList} isLoading={isLoading} />;
};

export default PostList;
