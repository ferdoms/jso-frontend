import React from "react";
import { RenderRoutes } from "../components/render-routes/RenderRoutes";
import { RouteInterface } from "../interfaces/RouteInterface";
import { withAuthGuard } from "../components/with-auth-guard/withAuthGuard";
import { LoginPage } from "../pages/login-page/LoginPage";
import { DashboardPage } from "../pages/dashboard-page/DashboardPage";
import { ProfilePage } from "../pages/profile-page/ProfilePage";
import { FindAccountPage } from "../pages/findaccount-page/FindAccountPage";
import { ResetPassPage } from "../pages/resetpass-page/ResetPassPage";
import { SignupPage } from "../pages/signup-page/SignupPage";
import { HomePage } from "../pages/home-page/HomePage";
import { AboutPage } from "../pages/about-page/AboutPage";

const ROUTES: RouteInterface[] = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuthGuard(HomePage)
  },
  {
    path: "/about",
    key: "ABOUT",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuthGuard(AboutPage)
  },
  {
    path: "/signup",
    key: "SIGNUP",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuthGuard(SignupPage)
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuthGuard(LoginPage)
  },
  {
    path: "/dashboard",
    key: "DASHBOARD",
    exact: true,
    isProtected: true,
    guestOnly: false,
    component: withAuthGuard(DashboardPage)
  },
  {
    path: "/settings",
    key: "SETTINGS",
    exact: true,
    isProtected: true,
    guestOnly: false,
    component: withAuthGuard(ProfilePage)
  },
  {
    path: "/forgotpassword",
    key: "FORGOTPASSWORD",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuthGuard(FindAccountPage)
  },
  {
    path: "/resetpassword",
    key: "RESETPASSWORD",
    exact: true,
    isProtected: false,
    guestOnly: true,
    component: withAuthGuard(ResetPassPage)
  },  
];

export default ROUTES;
