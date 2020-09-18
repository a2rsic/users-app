import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <h2 className="header-title">Users App</h2>
        <Link to="/">
          <HomeIcon style={{ color: "white", fontSize: 30 }} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
