import { createBrowserRouter } from "react-router-dom";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Main Page</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <Register />,
  },
]);

export default Router;
