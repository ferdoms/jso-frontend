import React from "react";
import Section from "../../components/section/Section";
import { withLayout } from "../withLayout";

const InnerAboutPage: React.FC = () => {
  return (
    <Section className="pv5">
      <div className="bg-white mw5 mw6-ns center pt4">
        <div className="aspect-ratio aspect-ratio--1x1 mb4">
          <div
            className="aspect-ratio--object cover"
            style={{ background: "url(img/about.jpg) center" }}
          ></div>
        </div>
        <h1 className="tc">About us</h1>
        <p className="center lh-copy">
          JobSeekerOrganizer is a platform where users can store information
          about their job applications such as resumes, cover letters and any
          other related documents, job description, status of the application,
          set reminders to follow up with the recruiter and more.
        </p>
      </div>
    </Section>
  );
};

export const AboutPage = withLayout(InnerAboutPage);
