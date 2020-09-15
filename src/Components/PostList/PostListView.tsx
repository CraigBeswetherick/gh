import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface PostListView {
  postList: Array<any>;
  isLoading: boolean;
}

const PostListView = (props: PostListView) => {
  const classes = useStyles();

  console.log(props.postList)

  return (
    <div>
      <Typography className={classes.title}>List of all Posts</Typography>

      {props.isLoading ? <Typography>Loading...</Typography> : ""}

      {props.postList.map((post: any, index: number) => (
        <List key={index}>
          <ListItem key={post.title}>Title: {post[1].title}</ListItem>
          <ListItem key={index}>Content: {post[1].content}</ListItem>
          <ListItem key={index+1}>Author: {post[1].author}</ListItem>
        </List>
      ))}
    </div>
  );
};

export default PostListView;
