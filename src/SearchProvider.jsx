import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SearchProvider = (props) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
