import React, { useState } from "react";
import Section from "../../components/section/Section";
import JobCard from "../../components/job-card/JobCard";
import { FadeIn } from "../../components/animations/fade-in";
import JobApplBoard from "../../components/job-appl-board/JobApplBoard";
import { jobApplList } from "./mockDatav2";
import { SlideLeft } from "../../components/animations/slide-left";
import { EditJobForm } from "../../components/edit-job-form/EditJobForm";

export const DashboardPage: React.FC = () => {
  const [isAdding, setIsAdding] = useState(true);

  const onAdd = () => {
    setIsAdding(true);
  };
  const onClose = () => {
    setIsAdding(false);
  };

  /// TESTE

  let userData = {
    fname: "string",
    lname: "string",
    email: "s@s.com",
  };

  return (
    <Section className="pv6">
      <JobApplBoard jobApplList={jobApplList} onAddJobClick={onAdd} />
      <FadeIn in={isAdding}>
        <div className="bg-mid-gray fixed h-100 w-100 top-0 left-0"></div>
      </FadeIn>
      <SlideLeft in={isAdding}>
        <div id="addMain" className=" ml7-l h-100 bg-white ph2 ph4-ns pr6-l pv5 overflow-y-scroll">
        <EditJobForm jobApplication={jobApplList[0]}/>
        </div>
      </SlideLeft>
    </Section>
  );
};
