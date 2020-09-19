import React, { useState } from "react";

import { userService } from "../../services/userService.js";

import UserCard from "./UserCard";
import Loader from "../../common/loader/Loader.jsx";

const UsersList = () => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");

  const loadUsers = async () => {
    try {
      const users = await userService.fetchUsers();
      setUsers(users);
    } catch (error) {
      setError(error);
    }
  };

  const mapUsers = () => {
    users.map((user, index) => <UserCard user={user} key={index} />);
  };

  //  if(!users) {
  //     return  <Loader />
  // }

  return (
    // Add width 25%
    <>
      <div style={{ margin: 30 }}>
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
};

export default UsersList;
