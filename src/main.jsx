import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Blog from './components/Blog';
import ChefRecipe from './components/ChefRecipe';
import AuthProviders from './providers/AuthProviders';
import PrivateRoute from './routes/PrivateRoute';
import ErrorPage from './components/ErrorPage';

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
