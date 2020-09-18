import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";

import SearchBar from "../search-bar/SearchBar";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <HomeIcon style={{ color: "white", fontSize: 32 }} />
          </Link>
          <h2 className="header-title">Users App</h2>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
