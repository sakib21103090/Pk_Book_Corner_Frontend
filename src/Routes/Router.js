import { createBrowserRouter } from "react-router-dom";

import Home from "../features/Pages/Home";
import UserLogin from "../features/Pages/UserLogin";
import UserSignUp from "../features/Pages/UserSignUp";

import CartPage from "../features/Pages/CartPage";
import CheckOutPage from "../features/Pages/CheckOut";
import BooksInfoPage from "../features/Pages/BooksInfoPage";
import Main from "../Layouts/Main";
import Error from "../features/Error/Error";
import OrderDone from "../features/Pages/OrderDonePage";
import UserProfile from "../features/UserPannel/User/UserProfile";
import UserPannel from "../features/UserPannel/UserPannel";
import PannelPage from "../features/UserPannel/PannelPage";
import AdminProfile from "../features/UserPannel/Admin/AdminProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <UserLogin></UserLogin>,
      },
      {
        path: "/signup",
        element: <UserSignUp></UserSignUp>,
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/checkoutpage",
        element: <CheckOutPage></CheckOutPage>,
      },
      {
        path: "/booksinfopage/:id",
        element: <BooksInfoPage></BooksInfoPage>,
      },
      {
        path: "/orderDone/:id",
        element: <OrderDone></OrderDone>,
      },
      
    ],
  },
  {
      
    path: "/pannelPage",
    element: <PannelPage></PannelPage>,
    children :[
      
        {
          path: "userprofile",
          element: <UserProfile></UserProfile>,
        },
        {
          path: "adminprofile",
          element: <AdminProfile></AdminProfile>,
        },
      
      
      
    ]
  
},
]);
