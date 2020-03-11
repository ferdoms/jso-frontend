import React from "react";
import Section from "../../components/section/Section";
import { SignupForm } from "../../components/signup-form/SignupForm";
import { ProfileForm } from "../../components/profile-form/ProfileForm";

export const ProfilePage: React.FC = () => {
  return (
    <Section className="pv6 " >
      <div className="center bg-white" style={{ maxWidth: "24rem"}}>
        <ProfileForm />
      </div>
    </Section>
  );
};
