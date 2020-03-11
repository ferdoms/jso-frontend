import React from "react";
import Section from "../../components/section/Section";
import { LoginForm } from "../../components/login-form/LoginForm";
import { EmailForm } from "../../components/email-form/EmailForm";

export const FindAccountPage: React.FC = () => {
  return (
    <Section className="pv6">
      <div className="center bg-white" style={{ maxWidth: "24rem" }}>
        <EmailForm />
      </div>
    </Section>
  );
};
