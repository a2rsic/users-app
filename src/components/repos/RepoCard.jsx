import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./RepoCard.scss";

const RepoCard = ({ repo }) => {
  const { created_at, description, name, owner } = repo;

  const cutDestcription = (desc, number) => {
    return desc.slice(0, number);
  };

  return (
    <div className="repo-card">
      <h3>{name}</h3>
      {description && <p>{cutDestcription(description, 100).concat("...")}</p>}
      <p>
        <i>Created at:</i>&nbsp; {cutDestcription(created_at, 10)}
      </p>
      <Link target="_blank" to={`/repos/${owner.login}/${name}`}>
        <button className="button-secondary pure-button">See more</button>
      </Link>
    </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.object,
};

export default RepoCard;
