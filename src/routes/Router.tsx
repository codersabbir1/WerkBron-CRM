import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import ActiveContact from "../pages/ActiveContact/ActiveContact";

const router = createBrowserRouter([
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
        path: "/",
        element: <ActiveContact />,
      },
    ],
  },
]);

export default router;
