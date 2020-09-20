/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { repoService } from "../../services/repoService";

import Loader from "../../common/loader/Loader";

import "./RepoItem.scss";

const RepoItem = () => {
  const [repo, setRepo] = useState();

  let { username, reponame } = useParams();

  const loadRepo = async () => {
    const repo = await repoService.fetchRepo(username, reponame);
    setRepo(repo);
  };

  useEffect(() => {
    loadRepo();
  }, []);

  if (!repo) {
    return <Loader />;
  }

  return (
    <>
      {repo && (
        <div className="container">
          <h2>{repo.name}</h2>
          <ul>
            {repo.license && (
              <li>
                <i>Licence type:</i>&nbsp; {repo.license.name}
              </li>
            )}
            <li>
              <i>Stargazers count:</i>&nbsp; {repo.stargazers_count}
            </li>
            <li>
              <i>Watchers count:</i>&nbsp; {repo.watchers_count}
            </li>
            <li>
              <i>Forks count:</i>&nbsp; {repo.forks_count}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object,
};

export default RepoItem;
