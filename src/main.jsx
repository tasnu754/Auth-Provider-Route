import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Layouts/Header/Header';
import Home from './Layouts/Home/Home';
import Register from './Layouts/Register/Register';
import Login from './Layouts/Login/Login';
import Logout from './Layouts/Logout/Logout';
import ContextElement from './ContextElement/ContextElement';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signIn",
        element: <Login></Login>,
      },
      {
        path: "/signOut",
        element: <Logout></Logout>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextElement>
      <RouterProvider router={router} />
    </ContextElement>
  </React.StrictMode>
);
