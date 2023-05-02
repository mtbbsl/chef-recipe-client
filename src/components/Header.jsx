import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Indian Chef</a>
      </div>
      <div className="flex-none gap-2">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
        <Link to="/chefRecipe" className="btn btn-ghost normal-case text-xl">Chef Recipe</Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
        <img className="w-10 rounded-full" src="/public/image.jpg" />
      </div>
    </div>
  );
};

export default Header;
