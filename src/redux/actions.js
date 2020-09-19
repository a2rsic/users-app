export const SEARCH = "SEARCH INPUT VALUE";

const searchInputValue = (value) => ({
  type: SEARCH,
  payload: value,
});

export default searchInputValue;
