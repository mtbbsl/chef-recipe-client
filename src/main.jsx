import React from 'react'
import { lazy } from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/Main';
// import Home from './components/Home';
import Loadable from './components/Loadable';
const Home = Loadable(lazy(() => import("./components/Home")));
const Login = Loadable(lazy(() => import("./components/Login")));
const Register = Loadable(lazy(() => import("./components/Register")));
const Blog = Loadable(lazy(() => import("./components/Blog")));
const ChefRecipe = Loadable(lazy(() => import("./components/ChefRecipe")));
const ErrorPage = Loadable(lazy(() => import("./components/ErrorPage")));
import AuthProviders from './providers/AuthProviders';
import PrivateRoute from './routes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chefRecipe/:id",
        element: (
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
