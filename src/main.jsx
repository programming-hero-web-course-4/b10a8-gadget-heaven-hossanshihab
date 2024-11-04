import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails";
import Statistics from './components/Statistics/Statistics';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: ()=> fetch('/alldata.json'),
      },
      {
        path: "gadget/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('/alldata.json'),
      },
      {
        path: "statistics",
        element:  <Statistics></Statistics>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
