import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import { ReactNode } from "react";

interface CustomRouteObject extends RouteObject {
  element: ReactNode;
  errorElement?: ReactNode;
  children?: CustomRouteObject[];
}

const router = createBrowserRouter<CustomRouteObject[]>([
  {
    path: "/",
    element: <Root />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default router;
