import React, { Children, Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/Apps/AppDetails";
import Error from "../Pages/Home/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,

        path: "/",
        loader: () => fetch("/AppsData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/AllData.json"),

        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("/AllData.json"),
        Component: AppDetails,
      },
    ],
  },
]);
