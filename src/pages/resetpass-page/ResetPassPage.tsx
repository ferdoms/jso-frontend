import React from "react";
import Section from "../../components/section/Section";
import { ResetPassForm } from "../../components/resetpass-form/ResetPassForm";

export const ResetPassPage: React.FC = () => {
  return (
    <Section className="pv6">
      <div className="center bg-white" style={{ maxWidth: "24rem" }}>
        <ResetPassForm />
      </div>
    </Section>
  );
};
