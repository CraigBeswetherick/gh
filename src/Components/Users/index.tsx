import React, { useState, useEffect } from "react";
import UsersView from "./UsersView";
import { getAllUsers, deleteUser } from "../../Utils/Firebase";

const Users: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = (userId: string) => {
    setIsLoading(true);
    setErrorMessage("");
    deleteUser(userId)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  const getUsers = () => {
    getAllUsers().on("value", (snapshot) => {
      setIsLoading(false);
      if (snapshot.val()) {
        const users: any = Object.entries(snapshot.val());
        setUserList(users);
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersView
      userList={userList}
      isLoading={isLoading}
      handleDelete={handleDelete}
      errorMessage={errorMessage}
    />
  );
};

export default Users;
