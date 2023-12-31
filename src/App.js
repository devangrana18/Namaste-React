import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom";
import ReastaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div>
      <Header />
     <Outlet />
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <ReastaurantMenu />
      }
    ],
    errorElement:<Error/>
  },
 
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);
