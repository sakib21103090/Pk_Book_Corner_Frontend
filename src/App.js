
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./features/Pages/Home";
import UserLogin from "./features/Pages/UserLogin";
import UserSignUp from "./features/Pages/UserSignUp";


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
    path: "/",
    element:<Home></Home>,
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
