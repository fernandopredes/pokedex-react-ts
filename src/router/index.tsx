import { createBrowserRouter } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const router = createBrowserRouter([
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
