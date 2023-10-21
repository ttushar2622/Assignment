import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedRecipe } from "./Redux/actions";
import { Box, Text, Image, Button } from "@chakra-ui/react";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes.searchResults);
  const dispatch = useDispatch();

  const handleRecipeClick = (recipe) => {
    dispatch(setSelectedRecipe(recipe));
  };

  return (
    <Box p={4} bg="white" rounded="md">
      {recipes.map((recipe) => (
        <Box
          key={recipe.id}
          p={4}
          border="1px"
          borderColor="gray.300"
          rounded="md"
          my={2}
        >
          <Text fontSize="xl">{recipe.title}</Text>
          <Image src={recipe.image} alt={recipe.title} my={2} />
          <Text>{recipe.summary}</Text>
          <Button
            colorScheme="blue"
            mt={2}
            onClick={() => handleRecipeClick(recipe)}
          >
            View Details
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default RecipeList;
