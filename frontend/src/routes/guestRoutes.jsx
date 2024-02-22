import BaseLayout from "../Layout/BaseLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const guestRoutes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default guestRoutes;
