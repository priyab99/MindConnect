import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Signup from "../pages/Home/Signup/Signup";
import Symptoms from "../pages/Symptoms/Symptoms";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/signup",
            element: <Signup></Signup>
        },
        {
          path: '/selectsymptoms',
          element: <Symptoms></Symptoms>,
        }
      ]
    },
    {
      path: '/dashboard',
      element:<Dashboard></Dashboard>,
      children: [
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
       },
      ]
    }
  ]);