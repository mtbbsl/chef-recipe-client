import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipe = () => {
  const { id } = useParams();

  const [chefRecipe, setChefRecipe] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setChefRecipe({
          ...data,
          recipes: data.recipes.map((recipe) => ({
            ...recipe,
            favoriteClicked: false,
          })),
        })
      );
  }, [id]);

  const handleFavoriteClick = (recipeId) => {
    setChefRecipe((prevChefRecipe) => ({
      ...prevChefRecipe,
      recipes: prevChefRecipe.recipes.map((recipe) => {
        if (recipe.id === recipeId) {
          return {
            ...recipe,
            favoriteClicked: true,
          };
        } else {
          return recipe;
        }
      }),
    }));
    toast("Favorite added");
  };

  return (
    <div>
      <h1>{chefRecipe.chef_name}</h1>
      <div>
        {chefRecipe?.recipes?.map((recipe) => (
          <div key={recipe.id}>
            {recipe.recipe_name}
            <button
              onClick={() => handleFavoriteClick(recipe.id)}
              className="btn btn-accent m-4"
              disabled={recipe.favoriteClicked}
            >
              {recipe.favoriteClicked ? "Favorited" : "Favorite"}
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChefRecipe;
