import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { User } from "firebase";

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
  userList: Array<User>;
}

const UsersView = (props: UsersView) => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>List of all users</Typography>

      {props.userList.map((user: User) => (
        <Typography className={classes.title}>
          {(user.email, user.uid)}
        </Typography>
      ))}
    </div>
  );
};

export default UsersView;
