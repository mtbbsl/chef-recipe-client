import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.log('error', error.message);
    })
  };

  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={handleGoogleSignIn}>Google Login</button>
    </div>
  );
};

export default Login;
