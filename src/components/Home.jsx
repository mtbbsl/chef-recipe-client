import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const [chefsData, setChefsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.error(error))
  }, []);

  const handleViewRecipe = (id) => {
    navigate(`/chefRecipe/${id}`);
  }

  return (
    <div>
      {/* banner section */}
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src="/chef.png" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Indian Chef</h1>
              <p className="py-6">
                Six Famous Indian Chefs That Will Help You Unlock Your Culinary
                Skills The Right Way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* chefs card section */}
      <section className="px-10 py-10">
        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-1">
          {chefsData.map((chef) => (
            <div key={chef.id} className="card card-side bg-neutral shadow-xl">
              <figure>
                <img src={chef?.chef_picture_url} alt="" className="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Chef Name: {chef.chef_name}</h2>
                <p>Experience: {chef.years_of_experience} years</p>
                <p>No. of Recipes: {chef.number_of_recipes}</p>
                <p>Likes: {chef.likes}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleViewRecipe(chef.id)}
                    className="btn btn-active btn-accent"
                  >
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
