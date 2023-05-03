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
            
        </section>
      </div>
    );
};

export default Home;