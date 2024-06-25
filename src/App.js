
import * as React from "react";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from "./Routes/Router";
import AuthProviders from "./Providers/AuthProviders";

function App() {
  return (
   <AuthProviders>
     <div className="App max-w-screen-2xl mx-auto ">
      <RouterProvider router={router} />
    </div>
   </AuthProviders>
  );
}

export default App;
