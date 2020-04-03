import React from "react";
import Section from "../../components/section/Section";
import { LoginForm } from "../../components/login-form/LoginForm";
import { withLayout } from "../withLayout";

const InnerLoginPage: React.FC = props => {
  return (
    <Section className="pv6">
      <div className="center bg-white" style={{ maxWidth: "24rem" }}>
        <LoginForm {...props} />
      </div>
    </Section>
  );
};

export const LoginPage = withLayout(InnerLoginPage);
