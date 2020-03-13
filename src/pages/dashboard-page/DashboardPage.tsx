import React from "react";
import Section from "../../components/section/Section";
import JobCard from "../../components/job-card/JobCard";

export const DashboardPage: React.FC = () => {
  let cln = "bg-light-green dib pa4 ma2 grow bw2 shadow-5 mw5";

  let jobAppl = {
    companyName: "Mastercard",
    title: "Developer",
    description: `As a graduate engineer, you will be very much part of this culture, writing code on a daily basis and learning what it takes to be an exceptional software engineer. You will be supported every step of the way, through attending conferences, in-house training and mentoring from our team of experts.`
  };
  return (
    <Section className="pv6">
      <div className="flex flex-wrap ">
        <JobCard jobAppl={jobAppl}/>
        <JobCard jobAppl={jobAppl}/>
        <JobCard jobAppl={jobAppl}/>
        <JobCard jobAppl={jobAppl}/>
        <JobCard jobAppl={jobAppl}/>
        
      </div>
    </Section>
  );
};
