import React, { lazy, Suspense, useEffect, useState } from "react";
import Header from "./Header";
import BodyComponent from "./Body";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ContactUs from "./ContactUs";
import Error from "./Error";
import RestroMenu from "./RestroMenu";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import CartPage from "./CartPage";

const Grocery = lazy(() => import("./Grocery"));
const AboutPage = lazy(() => import("./AboutPage"));

const AppLayoutComponent = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Priyanka Gosavi",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <h1 className="text-3xl text-blue-500 font-italic">Tailwind is working 🎉</h1>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Export the router so it can be imported in index.js
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...........</h1>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestroMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Export the main AppLayoutComponent if you want to import it elsewhere
export default AppLayoutComponent;
