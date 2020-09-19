import React from "react";

import "./RepoItem.scss";

const RepoItem = () => {
  return (
    <div className="container">
      <h2>Repos name</h2>
      <ul>
        <li>
          <i>Licence type:</i>&nbsp; new
        </li>
        <li>
          <i>Stargazers count:</i>&nbsp; 20
        </li>
        <li>
          <i>Watchers count:</i>&nbsp; 20
        </li>
        <li>
          <i>Forks count:</i>&nbsp; 20
        </li>
      </ul>
    </div>
  );
};

export default RepoItem;
