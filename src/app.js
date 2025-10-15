import React from "react";
import ReactDom from "react-dom/client";
 import "./index.css";
import Header from "./components/Header";
import restaurantmenu from "./components/restaurantmenu";
import Body from "./components/Body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
 
const Applayout = () => {
  return(
    <div className ="app">
        <Header />
        <Outlet />
    </div>
  )
};

const appRouter = createBrowserRouter([
  
  {
    path : "/",
    element : <Applayout/>,
    children : [
      {
    path:"/about",
    element : <about/>
  },
  {
    path:"/contact",
    element : <contact/>
  },
  {
    path : "/restaurant/:resId",
    element : < restaurantmenu />
  }
    ],
    errorElement : <error />
  },


])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render( <RouterProvider router = {appRouter} />);

 
