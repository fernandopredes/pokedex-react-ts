import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  }
]);
export default router
