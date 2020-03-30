import React from "react";
import { RenderRoutes } from "../components/render-routes/RenderRoutes";
import { RouteInterface } from "../interfaces/RouteInterface";
import { withAuth } from "../components/with-auth/withAuth";
import { LoginPage } from "../pages/login-page/LoginPage";
import { DashboardPage } from "../pages/dashboard-page/DashboardPage";
import { ProfilePage } from "../pages/profile-page/ProfilePage";
import { FindAccountPage } from "../pages/findaccount-page/FindAccountPage";
import { ResetPassPage } from "../pages/resetpass-page/ResetPassPage";
import { SignupPage } from "../pages/signup-page/SignupPage";

const ROUTES: RouteInterface[] = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: () => <h1>homepage</h1>
  },
  {
    path: "/about",
    key: "ABOUT",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: () => <h1>About</h1>
  },
  {
    path: "/signup",
    key: "SIGNUP",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuth(SignupPage)
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuth(LoginPage)
  },
  {
    path: "/dashboard",
    key: "DASHBOARD",
    exact: true,
    isProtected: true,
    guestOnly: false,
    component: withAuth(DashboardPage)
  },
  {
    path: "/settings",
    key: "SETTINGS",
    exact: true,
    isProtected: true,
    guestOnly: false,
    component: withAuth(ProfilePage)
  },
  {
    path: "/forgotpassword",
    key: "FORGOTPASSWORD",
    exact: true,
    isProtected: true,
    guestOnly: false,
    component: withAuth(FindAccountPage)
  },
  {
    path: "/resetpassword",
    key: "RESETPASSWORD",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuth(ResetPassPage)
  },  
];

export default ROUTES;
