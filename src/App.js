
import * as React from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
