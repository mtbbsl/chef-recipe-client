import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {

    const { user, createUser, updateUserData } = useContext(AuthContext);
    // console.log(user, createUser);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess('');
    setError('');
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // validate
    if(password.length < 6){
      setError('Please add at least 6 characters in your password.');
      return;
    }

    createUser(email, password)
    .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser);

        updateUserData(name, photo)
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        })

        form.reset();
        setError('');
        setSuccess('User created successfully.');
    })
    .catch(error => {
        console.error(error.message);
        setError(error.message);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register</h1>
          <p className="py-6">
            Please Register to login and view Indian Chef details with their
            different recipes.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Register</button>
            </div>
          </form>
          <p className="text-yellow-300 text-center px-4">{error}</p>
          <p className="text-green-500 text-center px-4">{success}</p>
          <Link to="/login" className="text-center mb-4">
            <button className="btn btn-link text-base-content no-underline">
              Already have an account? Please Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

