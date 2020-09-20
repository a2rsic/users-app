import React from "react";
import { Link } from "react-router-dom";

import "./UserCard.scss";

const UserCard = ({ user }) => {
  const { login, avatar_url } = user;

  return (
    <Link
      to={`${login}/repos`}
      style={{ textDecoration: "none", color: "gray" }}
    >
      <div className="user-card-container">
        <div className="img">
          <img src={avatar_url} alt="Avatar" />
        </div>
        <div className="user-info">
          <h3>{login}</h3>
          <p>User public description...</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
