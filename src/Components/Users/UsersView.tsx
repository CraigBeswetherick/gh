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

interface UsersView {
  userList: Array<any>;
  isLoading: boolean;
}

const UsersView = (props: UsersView) => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title}>List of all users</Typography>

      {props.isLoading ? <Typography>Loading...</Typography> : ""}

      <List>
        {props.userList.map((user: any) => (
          <ListItem key={user[0]}>{user[1].email}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default UsersView;
