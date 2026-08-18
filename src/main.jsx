import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddCraft from "./Pages/AddCraft";
import AllCrafts from "./Pages/AllCraft";
import ViewDetails from "./Pages/ViewDetails";
import MyCrafts from "./Pages/MyCrafts";
import UpdateCraft from "./Pages/UpdateCraft";
import CategoryItems from "./Pages/CategoryItems";
import NotFound from "./Pages/NotFound";

import PrivateRoute from "./Components/PrivateRoute";
import AuthProvider from "./AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/all-crafts",
    element: <AllCrafts />,
  },

  {
    path: "/add-craft",
    element: (
      <PrivateRoute>
        <AddCraft />
      </PrivateRoute>
    ),
  },

  {
    path: "/view/:id",
    element: (
      <PrivateRoute>
        <ViewDetails />
      </PrivateRoute>
    ),
  },

  {
    path: "/my-crafts",
    element: (
      <PrivateRoute>
        <MyCrafts />
      </PrivateRoute>
    ),
  },

  {
    path: "/update-craft/:id",
    element: (
      <PrivateRoute>
        <UpdateCraft />
      </PrivateRoute>
    ),
  },

  {
    path: "/category/:subcategory",
    element: <CategoryItems />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);