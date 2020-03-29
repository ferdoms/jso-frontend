import React from "react";
import { RenderRoutes } from "../components/render-routes/RenderRoutes";
import { RouteInterface } from "../interfaces/RouteInterface";

const ROUTES: RouteInterface[] = [
  { path: "/", key: "ROOT", exact: true, component: () => <h1>homepage</h1> },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: () => <h1>login</h1>
  },
  {
    path: "/dashboard",
    key: "LOGIN",
    component: RenderRoutes,
    routes: [
      {
        path: "/dashboard",
        key: "LOGIN",
        exact: true,
        component: () => <h1>dashboard</h1>
      },
      {
        path: "/dashboard/um",
        key: "LOGIN",
        exact: true,
        component: () => <h1>um</h1>
      },
      {
        path: "/dashboard/dois",
        key: "LOGIN",
        exact: true,
        component: () => <h1>dois</h1>
      }
    ]
  }
];

export default ROUTES;
