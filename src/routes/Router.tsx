import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import ActiveContact from "../pages/ActiveContact/ActiveContact";
import ProfileContact from "@/pages/ProfileContact/ProfileContact";

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
      {
        path: "/profile-contact",
        element: <ProfileContact />,
      },
    ],
  },
]);

export default router;
