import React, { useState } from "react";
import Section from "../../components/section/Section";
import JobCard from "../../components/job-card/JobCard";
import Tab from "../../components/tab/Tab";
import JobApplBoard from "../../components/job-appl-board/JobApplBoard";
import {jobApplList} from "./mockData"
import JobAppl from "../../components/job-appl/JobAppl";

export const DashboardPage: React.FC = () => {

  const [isAdding, setIsAdding] = useState(false);

  const onAdd = () => {
    setIsAdding(true)
  }
  
  return (
    <Section className="pv6">
      <JobAppl />
      <JobApplBoard jobApplList={jobApplList}/>
    
    </Section>
  );
};
