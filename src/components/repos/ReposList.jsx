import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import PropTypes from "prop-types";

import { repoService } from "../../services/repoService";

import RepoCard from "./RepoCard";
import Loader from "../../common/loader/Loader";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  let { username } = useParams();

  const loadRepos = async () => {
    try {
      const repos = await repoService.fetchRepos(username);
      setRepos(repos);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const mapRepos = () => {
    return repos.map((repo, index) => <RepoCard key={index} repo={repo} />);
  };

  if (!repos.length) {
    return <Loader />;
  }

  return (
    <>
      {error && <p>{error}</p>}
      <div style={{ margin: 40 }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <button className="button-secondary pure-button">Back</button>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 30,
        }}
      >
        {mapRepos()}
      </div>
    </>
  );
};

ReposList.propTypes = {
  repos: PropTypes.array,
};

export default ReposList;
