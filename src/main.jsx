import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyProvider } from "./assets/Components/ProvideContext/Provider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginLayout from "./assets/Components/Layouts/LoginLayout.jsx";
import SignIn from "../src/assets/Components/Authentication/SignIn.jsx";
import SignUp from "../src/assets/Components/Authentication/SignUp.jsx";
import Allitems from "../src/assets/Components/Nav_options/Allitems.jsx";
import AddItems from "../src/assets/Components/Nav_options/AddItems/AddItems.jsx";
import MyItems from "./assets/Components/Nav_options/MyItems.jsx";
import Dashboard from "./assets/Components/Nav_options/Dashboard/Dashboard.jsx";
import Errorpage from "./assets/Components/ErrorPage/Errorpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>
  },

  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "logout",
        element: <SignIn></SignIn>,
      },
      {
        path: "login",
        element: <SignUp></SignUp>,
      },
      {
        path: "allItems",
        element: <Allitems></Allitems>,
      },
      {
        path: "addItems",
        element: <AddItems></AddItems>,
      },
      {
        path: "/myItems/:email",
        element: <MyItems></MyItems>,
        loader: async ({ params }) => fetch(`http://localhost:5000/products/${params.email}`)
      }
      
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1800px] bg-white mx-auto">
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </div>
  </React.StrictMode>
);
