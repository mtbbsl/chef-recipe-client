import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const [show, setShow] = useState(false);

  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login</h1>
          <p className="py-6">
            Please login to view Indian Chef details with their different
            recipes.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p onClick={() => setShow(!show)}>
                <small>
                  {show ? (
                    <span>Hide Password</span>
                  ) : (
                    <span>Show Password</span>
                  )}
                </small>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-yellow-300 text-center px-4">{error}</p>
          <Link to="/register" className="text-center">
            <button className="btn btn-link text-base-content no-underline">
              New to Indian Chef? Please Register
            </button>
          </Link>
          <div className="flex justify-center gap-4 mb-4">
            <button onClick={handleGoogleSignIn} className="btn btn-primary">
              Google Sign In
            </button>
            <button onClick={handleGithubSignIn} className="btn btn-primary">
              Github Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
