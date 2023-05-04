import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipe = () => {
  const { id } = useParams();

  const [chefRecipe, setChefRecipe] = useState({});

  console.log(chefRecipe);

  useEffect(() => {
    fetch(`https://chef-recipe-server-mtbbsl.vercel.app/chefs/${id}`)
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
      {/* banner section */}
      <section className="p-16">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={chefRecipe.chef_picture_url}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{chefRecipe.chef_name}</h1>
              <p className="py-4">{chefRecipe.chef_bio}</p>
              <p className="py-2">
                <span className="font-bold">Number of recipes:</span>{" "}
                {chefRecipe.number_of_recipes}
              </p>
              <p className="py-2">
                <span className="font-bold">Years of experience:</span>{" "}
                {chefRecipe.years_of_experience}
              </p>
              <p className="py-2">
                <span className="font-bold">Likes:</span> {chefRecipe.likes}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* card section */}
      <section className="grid lg:grid-cols-3 px-16 pb-16">
        {chefRecipe?.recipes?.map((recipe) => (
          <div key={recipe.id} className="card w-96 bg-neutral shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{recipe.recipe_name}</h2>
              <p>
                <span className="font-bold">Ingredients:</span>
                {recipe.ingredients}
              </p>
              <p>
                <span className="font-bold">Cooking Method:</span>
                {recipe.cooking_method}
              </p>
              <p>
                <span className="font-bold">Ratings:</span>
                {recipe.ratings}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleFavoriteClick(recipe.id)}
                  className="btn btn-primary"
                  disabled={recipe.favoriteClicked}
                >
                  {recipe.favoriteClicked ? "Favorited" : "Favorite"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <ToastContainer />
    </div>
  );
};

export default ChefRecipe;
