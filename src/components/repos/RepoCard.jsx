import React from "react";

import "./RepoCard.scss";

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <h3>Repo Name</h3>
      <p>Public repo description...</p>
      <p>
        <i>Created at:</i>&nbsp; 19/09/2020
      </p>
      <a target="_blank" href="/repo-item">
        <button className="button-secondary pure-button">See more</button>
      </a>
    </div>
  );
};

export default RepoCard;
