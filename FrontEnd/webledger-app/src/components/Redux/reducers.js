import { SET_SEARCH_RESULTS, SET_SELECTED_RECIPE } from './actions.js';

const initialState = {
  searchResults: [],
  selectedRecipe: null,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_SELECTED_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
