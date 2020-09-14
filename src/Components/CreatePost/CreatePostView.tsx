import React from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "25ch",
  },
  paper: {
    marginTop: 0,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    marginTop: 0,
  },
});

interface InterfaceCreatePostView {
  postTitle: string;
  postContent: string;
  setPostTitle: Function;
  setPostContent: Function;
  handleSubmit: Function;
}

const CreatePostView: React.FC<InterfaceCreatePostView> = (
  props: InterfaceCreatePostView
) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h2">Create a new Post</Typography>
        <FormControl>
          <form>
            <Typography variant="h3">Post Title</Typography>
            <TextField
              id="Post Title"
              style={{ margin: 8 }}
              placeholder={props.postTitle}
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={props.postTitle}
              onChange={(e: any) => props.setPostTitle(e.target.value)}
            />

            <Typography variant="h3">Post Content</Typography>
            <TextField
              id="Post Content"
              style={{ margin: 8 }}
              placeholder={props.postContent}
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              defaultValue={props.postContent}
              onChange={(e: any) => props.setPostContent(e.target.value)}
            />
            <br />
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e: any) => props.handleSubmit(e)}
            >
              Create New Post
            </Button>
          </form>
        </FormControl>
      </Paper>
    </div>
  );
};

export default CreatePostView;
