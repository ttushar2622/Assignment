import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults } from "./Redux/actions";
import { Box, Input, Button } from "@chakra-ui/react";

function RecipeSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    const results =
      dispatch(setSearchResults(results));
  };

  return (
    <Box p={4} bg="gray.200" rounded="md">
      <Input
        type="text"
        placeholder="Search for recipes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button colorScheme="teal" mt={2} onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default RecipeSearch;
