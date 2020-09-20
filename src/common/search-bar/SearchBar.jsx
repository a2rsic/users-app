import React from "react";
import PropTypes from "prop-types";

import { useSearchContext } from "../../SearchContext";

import "./SearchBar.scss";

const SearchBar = () => {
  const { searchInput, setSearchInput } = useSearchContext();

  const onChangeHandler = (e) => {
    e.preventDefault();
    const searchInput = e.target.value;
    if (!searchInput) return;

    setSearchInput(searchInput);
  };

  return (
    <div className="search-container">
      <input
        onChange={onChangeHandler}
        type="text"
        placeholder="Search..."
        name="search"
        value={searchInput}
        autoComplete="off"
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchInput: PropTypes.string,
};

export default SearchBar;
