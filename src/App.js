
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./features/Pages/Home";
import UserLogin from "./features/Pages/UserLogin";
import UserSignUp from "./features/Pages/UserSignUp";

import CartPage from "./features/Pages/CartPage";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
  },
  {
    path: "/login",
    element:<UserLogin></UserLogin>,
  },
  {
    path: "/signup",
    element:<UserSignUp></UserSignUp>,
  },
  {
    path: "/cart",
    element:<CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
