import React, { useContext } from "react";

const SearchContext = React.createContext({
  searchInput: "",
  setSearchInput: (text) => {},
});

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export default SearchContext;
