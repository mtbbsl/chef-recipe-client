import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    return (
      <div>
        <section>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src="/chef.png" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Indian Chef</h1>
                <p className="py-6">
                  Six Famous Indian Chefs That Will Help You Unlock Your
                  Culinary Skills The Right Way
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="/chef.png"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chef Name: Ranvir Kumer</h2>
              <p>Year of Experience: 7</p>
              <p>Numbers of recipes: 10</p>
              <p>Likes: 5010</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Recipes</button>
              </div>
            </div>
          </div>
          
        </section>
      </div>
    );
};

export default Home;