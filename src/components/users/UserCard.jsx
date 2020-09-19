import React from "react";

import "./UserCard.scss";

const UserCard = () => {
  return (
    <div className="user-card-container">
      <div className="img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDbudoVtVUAZQ1msOQOfK1iCZEXStfwpTyrw&usqp=CAU"
          alt="Avatar"
        />
      </div>
      <div className="user-info">
        <h3>User Name</h3>
        <p>User public description...</p>
      </div>
    </div>
  );
};

export default UserCard;
