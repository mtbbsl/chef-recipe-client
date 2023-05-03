import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

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
        <img className="w-10 rounded-full" src="/image.jpg" />
        {
            user ? <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
            </> : <Link to="/login">Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
