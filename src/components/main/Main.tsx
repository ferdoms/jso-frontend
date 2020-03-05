import React from "react";
import Section from "../section/Section";
import { LoginForm } from "../login-form/LoginForm";

export const Main: React.FC = () => {
  return (
    <Section className="pv6" >
      <div className="center bg-white" style={{ maxWidth: "24rem"}}>
        <LoginForm />
      </div>
    </Section>
  );
};
