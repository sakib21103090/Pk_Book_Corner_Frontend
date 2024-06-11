import {
    createBrowserRouter,
    
  } from "react-router-dom";
 
  import Home from "../features/Pages/Home";
  import UserLogin from "../features/Pages/UserLogin";
  import UserSignUp from "../features/Pages/UserSignUp";
  
  import CartPage from "../features/Pages/CartPage";
  import CheckOutPage from "../features/Pages/CheckOutPage";
  import BooksInfoPage from "../features/Pages/BooksInfoPage";
import Main from "../Layouts/Main";
  
  
  export const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Main></Main>,
        // errorElement:<Error></Error>,
        children :[
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
              {
                path: "/checkoutpage",
                element:<CheckOutPage></CheckOutPage>,
              },
              {
                path: "/booksinfopage",
                element:<BooksInfoPage></BooksInfoPage>,
              },
          
         
          
      ]
      },
  ]);
  