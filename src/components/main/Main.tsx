import React from "react";
// import { LoginPage } from "../../pages/login-page/LoginPage";
import { SignupPage } from "../../pages/signup-page/SignupPage";
import { FindAccountPage } from "../../pages/findaccount-page/FindAccountPage";
import { ResetPassPage } from "../../pages/resetpass-page/ResetPassPage";

/**
 * Page content wrapper
 */
export const Main: React.FC = () => {
  return (
    <div>
      <ResetPassPage/>
    </div>
  );
};
