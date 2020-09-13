import React from "react";
import UsersView from "./UsersView";
import { User } from "firebase";

const Users: React.FC = () => {
  const userList: Array<User> = [];

  return <UsersView userList={userList} />;
};

export default Users;
