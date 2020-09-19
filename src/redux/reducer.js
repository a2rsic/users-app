import { SEARCH } from "../redux/actions/SEARCH";

const searchInput = (state = {}, action) => {
  switch (action.type) {
    case SEARCH:
      state = action.payload;
      break;
    default:
      return state;
  }
};

export default searchInput;
