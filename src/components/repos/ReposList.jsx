import React from "react";
import { Link } from "react-router-dom";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import RepoCard from "./RepoCard";

const ReposList = () => {
  return (
    // Add width 75%
    <>
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
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>
    </>
  );
};

export default ReposList;
