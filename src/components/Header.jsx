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
        
        {
            user ? <>
            <span>{user.email}</span>
            <span>{user.displayName}</span>
            <img src={user.photoURL} alt="" />
            <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Sign Out</button>
            </> : <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
