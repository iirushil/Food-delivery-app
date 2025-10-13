import React from "react";
import ReactDom from "react-dom/client";
 import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
 
const Applayout = () => {
  return(
    <div className ="app">
        <Header />
        <Body />
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <Applayout/>,
    errorElement : <error />
  },
  {
    path:"/about",
    element : <about/>
  },
  {
    path:"/contact",
    element : <contact/>
  }
  
])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render( <RouterProvider router = {appRouter} />);

 
