import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import ActiveLink from "./ActiveLink";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
  // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

  return (
    <div className="navbar bg-neutral text-neutral-content px-6 flex flex-col lg:flex-row">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Indian Chef & Recipes</a>
      </div>
      <div className="flex-none gap-4">
        <ActiveLink to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </ActiveLink>
        <ActiveLink to="/blog" className="btn btn-ghost normal-case text-xl">
          Blog
        </ActiveLink>

        {user ? (
          <div className="flex items-center">
            <img
              src={user.photoURL}
              alt={user.displayName}
              title={user.displayName}
              className="w-12 rounded-full cursor-pointer"
            />
            <button
              onClick={handleLogOut}
              className="btn btn-ghost normal-case text-xl"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <ActiveLink to="/login" className="btn btn-ghost normal-case text-xl">
            Login
          </ActiveLink>
        )}
      </div>
    </div>
  );
};

export default Header;
