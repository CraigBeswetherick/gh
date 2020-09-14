import React from "react";
import Typography from "@material-ui/core/Typography";
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

  props.userList.forEach((user: any) => {
    console.log(user[0]);
    console.log(user[1].email);
  });

  return (
    <div>
      <Typography className={classes.title}>List of all users</Typography>

      {props.isLoading ? <p>Loading...</p> : ""}

      {props.userList.forEach((user: any) => (
        <Typography className={classes.title}>
          Email: {user[1].email} Id: {user[0]} Roles: {user[3]}
        </Typography>
      ))}
    </div>
  );
};

export default UsersView;
