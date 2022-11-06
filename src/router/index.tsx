import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Details from "../pages/Details";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  }
]);
export default router
