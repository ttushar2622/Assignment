import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Text, Image, UnorderedList, ListItem } from '@chakra-ui/react';


function RecipeDetails() {
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe);

  if (!selectedRecipe) {
    return <div>No recipe selected.</div>;
  }

  return (
    <Box p={4} bg="white" rounded="md">
    <Text fontSize="2xl">{selectedRecipe.title}</Text>
    <Image src={selectedRecipe.image} alt={selectedRecipe.title} my={2} />
    <Text>{selectedRecipe.summary}</Text>
    <Text fontSize="lg">Ingredients</Text>
    <UnorderedList>
      {selectedRecipe.ingredients.map((ingredient, index) => (
        <ListItem key={index}>{ingredient}</ListItem>
      ))}
    </UnorderedList>
    <Text fontSize="lg">Instructions</Text>
    <UnorderedList>
      {selectedRecipe.instructions.map((instruction, index) => (
        <ListItem key={index}>{instruction}</ListItem>
      ))}
    </UnorderedList>
    <Text fontSize="lg">Nutritional Information</Text>
    <Text>{selectedRecipe.nutritionInfo}</Text>
  </Box>
  );
}

export default RecipeDetails;
