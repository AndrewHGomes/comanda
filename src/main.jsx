import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/global.css";

import Login from "./pages/Login/index.jsx";
import Home from "./pages/Home/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";
import Produtos from "./pages/Produtos/index.jsx";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/produtos",
        element: <Produtos />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
