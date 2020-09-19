import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import PropTypes from "prop-types";

import { repoService } from "../../services/repoService";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import RepoCard from "./RepoCard";
import Loader from "../../common/loader/Loader";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  let { username } = useParams();

  const loadRepos = async () => {
    try {
      const repos = await repoService.fetchRepos(username);
      console.log("repos", repos);
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

  if (!repos) {
    return <Loader />;
  }

  return (
    <>
      {error && <Loader />}
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <ArrowBackIcon
          fontSize="large"
          style={{ cursor: "pointer", padding: 20 }}
        />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 30,
        }}
      >
        <RepoCard />
        {/* {mapRepos()} */}
      </div>
    </>
  );
};

ReposList.propTypes = {
  repos: PropTypes.array,
};

export default ReposList;
