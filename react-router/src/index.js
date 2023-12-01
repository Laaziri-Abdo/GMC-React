import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Html from "./pages/Html";
import Node from "./pages/Node";
import Anas from "./pages/React";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>eroooooooor</h1>
    
  },
  {
    path: "/react",
    element: <Anas />,
    
  },
  {
    path: "/node",
    element: <Node />,
  },
  {
    path: "/html",
    element: <Html />,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);