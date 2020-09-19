import React from "react";

import UserCard from "./UserCard";

const UsersList = () => {
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
