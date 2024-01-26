import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Signup from "../pages/Home/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Therapists from "../pages/Therapists/Therapists"
import TherapistDetails from "../pages/Therapists/TherapistDetails";
import MySession from "../pages/Dashboard/MySession/MySession";
import Appointment from "../pages/Dashboard/Appointment/Appointment";
import Payment from "../pages/Payment/Payment";
import ContactUs from "../pages/Home/ContactUs";
import AboutUs from "../pages/Home/AboutUs";
import PatientRecords from "../pages/Dashboard/PatientRecords/PatientRecords";
import MyProgress from "../pages/Dashboard/MyProgress/MyProgress";

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
          path: "/contactus",
          element: <ContactUs></ContactUs>
        },
        {
          path: "/aboutus",
          element: <AboutUs></AboutUs>
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
          path: '/therapists',
          element:<Therapists></Therapists>,
        },
        {
          path: '/payment',
          element:<Payment></Payment>,
        },
        {
          path: '/therapists/:therapistsId',
          element:<TherapistDetails></TherapistDetails>,
          loader:()=>fetch("https://mind-connect-server.vercel.app/therapists")
        },
       
    
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
       {
        path:'mysession',
        element:<MySession></MySession>
     },
     {
      path:'myprogress',
      element:<MyProgress></MyProgress>
   },
   
     {
      path: 'myappointment',
      element: <Appointment></Appointment>
     },
     {
      path: 'patientsrecords',
      element: <PatientRecords></PatientRecords>
     },
      ]
    }
  ]);