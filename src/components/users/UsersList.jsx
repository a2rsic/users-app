import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { userService } from "../../services/userService.js";

import UserCard from "./UserCard";
import Loader from "../../common/loader/Loader.jsx";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    try {
      const users = await userService.fetchUsers();
      console.log("users :>> ", users);
      setUsers(users);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const mapUsers = () => {
    return users.map((user, index) => <UserCard user={user} key={index} />);
  };

  if (!users) {
    return <Loader />;
  }

  return (
    <>
      {error && <Loader />}
      <div style={{ margin: 30 }}>{mapUsers()}</div>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
