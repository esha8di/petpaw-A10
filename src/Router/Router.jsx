import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home/Home";

import Profile from "../pages/Profile/Profile";
import Services from "../pages/Services/Services";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Privaterouter from "./Privaterouter";
import Servicedetails from "../pages/Servicedetails/Servicedetails";
import Forgotpass from "../pages/Forgotpass/Forgotpass";
import Error from "../pages/Error/Error";
import Createlist from "../pages/Createlist/Createlist";
import MyService from "../pages/MyService/MyService";
import Edit from "../pages/Edit/Edit";
import Myorders from "../pages/Myorders/Myorders";
import Contact from "../pages/Contactterm/Contact";
import CategoryFilter from "../pages/CategoryFilter/CategoryFilter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/profile",
        element: (
          <Privaterouter>
            <Profile></Profile>
          </Privaterouter>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/servicedetails/:id",
        element: (
          <Privaterouter>
            <Servicedetails></Servicedetails>
          </Privaterouter>
        ),
      },
      {
        path: "/forgot/:email",
        Component: Forgotpass,
      },
      {
        path: "/createlist",
        element: (
          <Privaterouter>
            <Createlist></Createlist>
          </Privaterouter>
        ),
      },

      {
        path: "/myservices",
        element: (
          <Privaterouter>
            <MyService></MyService>
          </Privaterouter>
        ),
      },
      {
        path: "/myservices/:id",
        element: (
          <Privaterouter>
            <Edit></Edit>
          </Privaterouter>
        ),
      },
      {
        path: "/myorders",
        element: (
          <Privaterouter>
            <Myorders></Myorders>
          </Privaterouter>
        ),
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/category-filtered-product/:categoryName",
        Component: CategoryFilter,
      },
    ],
  },
]);

export default router;
