import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, []);

  // Function to handle removal of a saved recipe
  const removeSavedRecipe = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:3001/recipes/savedRecipes/${userID}/${recipeId}`);
      setSavedRecipes(savedRecipes.filter(recipe => recipe._id !== recipeId)); // Update state to remove the deleted recipe
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button onClick={() => removeSavedRecipe(recipe._id)}>Remove</button> {/* Remove button */}
            </div>
            <p>{recipe.description}</p>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p><strong>Cooking Time: {recipe.cookingTime} minutes</strong></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
