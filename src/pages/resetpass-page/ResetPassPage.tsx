import React from "react";
import Section from "../../components/section/Section";
import { ResetPassForm } from "../../components/resetpass-form/ResetPassForm";
import { withLayout } from "../withLayout";


export const InnerResetPassPage: React.FC = props => {
  return (
    <Section className="pv6">
      <div className="center bg-white" style={{ maxWidth: "24rem" }}>
        <ResetPassForm {...props}/>
      </div>
    </Section>
  );
};

export const ResetPassPage = withLayout(InnerResetPassPage);
