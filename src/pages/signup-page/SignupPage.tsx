import React from "react";
import Section from "../../components/section/Section";
import { SignupForm } from "../../components/signup-form/SignupForm";
import { withLayout } from "../withLayout";

export const InnerSignupPage: React.FC = props => {
  return (
    <Section className="pv6 " >
      <div className="center bg-white" style={{ maxWidth: "24rem"}}>
        <SignupForm {...props} />
      </div>
    </Section>
  );
};

export const SignupPage = withLayout(InnerSignupPage);
