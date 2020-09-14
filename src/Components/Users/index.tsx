import React, { useState, useEffect } from "react";
import UsersView from "./UsersView";
import { getAllUsers } from "../../Utils/Firebase";

const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUsers().on("value", (snapshot) => {
      setIsLoading(false);
      const users: any = Object.entries(snapshot.val());
      setUserList(users);
    });
  }, []);

  return <UsersView userList={userList} isLoading={isLoading} />;
};

export default Users;
