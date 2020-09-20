import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useSearchContext } from "../../SearchContext.jsx";

import { userService } from "../../services/userService.js";

import UserCard from "./UserCard";
import Loader from "../../common/loader/Loader.jsx";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const { searchInput } = useSearchContext();

  const loadUsers = async () => {
    try {
      const users = await userService.fetchUsers();
      setUsers(users);
    } catch (error) {
      setError(error);
    }
  };

  const filterUsers = async (searchInput) => {
    const filteredUsers = await userService.searchUsers(searchInput);
    setUsers(filteredUsers.items);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    if (searchInput) {
      const timer = setTimeout(() => {
        filterUsers(searchInput);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      loadUsers();
    }
  }, [searchInput]);

  const mapUsers = () => {
    return users.map((user, index) => <UserCard user={user} key={index} />);
  };

  if (!users.length) {
    return <Loader />;
  }

  return (
    <>
      {error && <p>{error}</p>}
      <div style={{ margin: 30 }}>{mapUsers()}</div>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;
