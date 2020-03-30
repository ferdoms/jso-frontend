import React from "react";
import Section from "../../components/section/Section";
import { SignupForm } from "../../components/signup-form/SignupForm";
import { withLayout } from "../withLayout";

export const InnerSignupPage: React.FC = () => {
  return (
    <Section className="pv6 " >
      <div className="center bg-white" style={{ maxWidth: "24rem"}}>
        <SignupForm />
      </div>
    </Section>
  );
};

export const SignupPage = withLayout(InnerSignupPage);
