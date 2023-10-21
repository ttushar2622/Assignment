import { createStore, combineReducers } from 'redux';
import recipesReducer from './reducers';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(rootReducer);

export default store;
