import React from "react";
import Section from "../../components/section/Section";
import JobCard from "../../components/job-card/JobCard";
import Tab from "../../components/tab/Tab";
import JobApplBoard from "../../components/job-appl-board/JobApplBoard";
import {jobApplList} from "./mockData"

export const DashboardPage: React.FC = () => {
  let cln = "bg-light-green dib pa4 ma2 grow bw2 shadow-5 mw5";

  

  
  return (
    <Section className="pv6">


      <JobApplBoard jobApplList={jobApplList}/>
      
    </Section>
  );
};
