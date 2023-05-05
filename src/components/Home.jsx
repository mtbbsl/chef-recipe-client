import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Home = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const [chefsData, setChefsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://chef-recipe-server-mtbbsl.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleViewRecipe = (id) => {
    navigate(`/chefRecipe/${id}`);
  };

  return (
    <div>
      {/* banner section */}
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <LazyLoad>
              <img src="/chef.png" className="max-w-m rounded-lg shadow-2xl" />
            </LazyLoad>
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Indian Chef & Recipes</h1>
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
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-12">
          <h1 className="text-5xl">Cool Chefs</h1>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 grid-cols-1">
          {chefsData.map((chef) => (
            <div key={chef.id} className="card card-side bg-neutral shadow-xl">
              <figure>
                <LazyLoad>
                  <img
                    src={chef?.chef_picture_url}
                    alt=""
                    className="object-cover h-96 w-96"
                  />
                </LazyLoad>
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

      {/* recipe cards area */}
      <section className="px-10 py-10">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-12">
          <h1 className="text-5xl">Recipes Items</h1>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 grid-cols-1">
          <div className="card w-96 bg-neutral shadow-xl">
            <figure>
              <img
                src="https://www.blueosa.com/wp-content/uploads/2020/07/Indian-Cauliflower-Potatoe.jpg"
                alt="Aloo Gobi"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Aloo Gobi (Potato and Cauliflower)</h2>
              <p>
                Aloo Gobi is a dry, vegan Indian dish, made with potatoes
                (aloo), cauliflower (gobi), and Indian spices. It has a warm,
                yellow-orange color, because it uses a staple in Indian dishes:
                turmeric.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl">
            <figure>
              <img
                src="https://www.blueosa.com/wp-content/uploads/2020/07/curried-meat-Indian-dshes.jpg"
                alt="Rogan Josh"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Rogan Josh (Curried Meat)</h2>
              <p>
                Rogan Josh consists of braised lamb chunks cooked with gravy.
                Generally, Indian chefs make this gravy from browned onions,
                yogurt, garlic, ginger, and aromatic spices.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-neutral shadow-xl">
            <figure>
              <img
                src="https://www.blueosa.com/wp-content/uploads/2020/07/chutney-Eating-clean-in-costa-rica.jpg"
                alt="Chutney"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chutney (Fruit Sauce)</h2>
              <p>
                As mentioned above, chutney (or “chatni”) is a sauce that is a
                flavorful sweet pair to savory samosas. It’s a relish made of
                various types of fruits, herbs, and spices, and it originated in
                India over 2,000 years ago. Heads up again, vegans, this is one
                for you.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* subscribe and contact us section */}
      <section className="px-10 py-10">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center my-12">
          <h1 className="text-5xl">Contact Us</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* subscribe area */}
          <div>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content text-center">
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl font-bold">Subscribe Now</h1>
                  <p className="py-6">
                    As a subscriber, you ll receive regular updates on Website
                    Name s latest news, articles, and promotions. We ll also be
                    sending you exclusive content that you wont find anywhere
                    else.
                  </p>
                  <p className="py-2">
                    We take your privacy seriously, so you can rest assured that
                    we won t share your personal information with anyone. If you
                    ever decide that you no longer want to receive emails from
                    us, you can unsubscribe at any time by clicking the
                    unsubscribe link at the bottom of our
                  </p>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                      <span>Email</span>
                      <input
                        type="text"
                        placeholder="info@site.com"
                        className="input input-bordered"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* feedback area */}
          <div>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Feedback</h1>
                  <p className="py-6">
                    Thanks for visiting our site. Wishing for contact you soon.
                  </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Message</span>
                      </label>
                      <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-md w-full max-w-xs"
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
