import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          placeholder="Search..."
          name="search"
          autoComplete="off"
        />
        <button type="submit">
          <SearchIcon fontSize="small" color="primary" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
