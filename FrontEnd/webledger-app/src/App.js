import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <h1>Recipe App</h1>
      <RecipeSearch />
      <RecipeList />
      <RecipeDetails />
    </div>
  );
}

export default App;
