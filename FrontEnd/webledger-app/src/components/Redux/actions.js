export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_SELECTED_RECIPE = 'SET_SELECTED_RECIPE';

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const setSelectedRecipe = (recipe) => ({
  type: SET_SELECTED_RECIPE,
  payload: recipe,
});
