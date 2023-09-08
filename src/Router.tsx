import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Login from "./components/users/Login";
import Logout from "./components/users/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
        children: [
          {
            path: "login",
            element: <Login />,
            errorElement: <ErrorComponent />,
          },
          {
            path: "logout",
            element: <Logout />,
            errorElement: <ErrorComponent />,
          },
        ],
      },
      {
        path: "header",
        element: <Header />,
        errorElement: <ErrorComponent />,
      },
    ],
  },
]);

export default router;
