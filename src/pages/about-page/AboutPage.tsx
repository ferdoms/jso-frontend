import React from "react";
import Section from "../../components/section/Section";
import { LoginForm } from "../../components/login-form/LoginForm";
import { withLayout } from "../withLayout";

const InnerAboutPage: React.FC = () => {
  return (
    <Section className="pv6">
      <div className="bg-white ">
        <h1 className="tc">About us</h1>
        <p className="measure center lh-copy">
          JobSeekerOrganizer is a platform where users can store information about their job
          applications such as resumes, cover letters and any other related
          documents, job description, status of the application, set reminders
          to follow up with the recruiter and more.
        </p>
      </div>
    </Section>
  );
};

export const AboutPage = withLayout(InnerAboutPage);
