import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Indian Chef</a>
      </div>
      <div className="flex-none gap-2">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/chefRecipe">Chef Recipe</Link>
        <Link to="/login">Login</Link>
        <img className="w-10 rounded-full" src="/public/image.jpg" />
      </div>
    </div>
  );
};

export default Header;
