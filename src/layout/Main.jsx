import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
      <div>
        <Header></Header>
        <div>
          {navigation.state === "loading" && (
            <progress
              className="progress progress-warning w-56"
              value="100"
              max="100"
            ></progress>
          )}
        </div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;