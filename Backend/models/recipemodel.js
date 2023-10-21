const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    summary:String,
  
  });

  const Recipe = mongoose.model('Recipe', recipeSchema);
 module.exports={
    Recipe
 }