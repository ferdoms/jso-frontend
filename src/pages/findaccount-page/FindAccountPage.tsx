import React from "react";
import Section from "../../components/section/Section";
import { LoginForm } from "../../components/login-form/LoginForm";
import { EmailForm } from "../../components/email-form/EmailForm";
import { withLayout } from "../withLayout";

const InnerFindAccountPage: React.FC = () => {
  return (
    <Section className="pv6">
      <div className="center bg-white" style={{ maxWidth: "24rem" }}>
        <EmailForm />
      </div>
    </Section>
  );
};

export const FindAccountPage = withLayout(InnerFindAccountPage);