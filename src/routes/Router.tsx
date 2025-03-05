import { createBrowserRouter, RouteObject } from "react-router-dom";

import { ReactNode } from "react";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import ActiveContact from "../pages/ActiveContact/ActiveContact";

interface CustomRouteObject extends RouteObject {
  element: ReactNode;
  errorElement?: ReactNode;
  children?: CustomRouteObject[];
}

const router = createBrowserRouter<CustomRouteObject[]>([
  {
    path: "/login",
    element: <Root />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/active-contact",
        element: <ActiveContact />,
      },
    ],
  },
]);

export default router;
