import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../search-bar/SearchBar";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2 className="header-title">Users App</h2>
          </Link>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
