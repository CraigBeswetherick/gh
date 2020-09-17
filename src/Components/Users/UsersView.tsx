import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    listItem: {
      textAlign: "center",
    },
    button: {
      background: "red",
      "&:hover": {
        background: "grey",
      },
    },
  })
);

interface UsersView {
  userList: Array<any>;
  isLoading: boolean;
  handleDelete: Function;
  errorMessage: string;
}

const UsersView = (props: UsersView) => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title}>List of all users</Typography>
      {props.errorMessage ? <Typography>{props.errorMessage}</Typography> : ""}
      {props.isLoading ? <Typography>Loading...</Typography> : ""}

      {props.userList.map((user: any, index: number) => (
        <List key={index}>
          <ListItem alignItems="center" key={user[0]}>
            Email: {user[1].email}{" "}
          </ListItem>
          <ListItem key={user[0] + "0"}>ID: {user[0]}</ListItem>
          <ListItem key={user[0] + "1"}>Roles: {user[1].roles}</ListItem>
          <Button
            className={classes.button}
            onClick={() => props.handleDelete(user[0])}
          >
            Delete User
          </Button>
        </List>
      ))}
    </div>
  );
};

export default UsersView;
