import React, { useState } from "react";
import Section from "../../components/section/Section";
import { FadeIn } from "../../components/animations/fade-in";
import JobApplBoard from "../../components/job-appl-board/JobApplBoard";
import { jobApplList } from "./mockDatav2";
import { SlideLeft } from "../../components/animations/slide-left";
import { EditJobForm } from "../../components/edit-job-form/EditJobForm";
import { JobApplication } from "../../interfaces/JobApplicationInterface";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";

export const DashboardPage: React.FC = () => {
  const [isAdding, setIsAdding] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [jobApplToEdit, setJobApplToEdit] = useState<JobApplication>();

  const onAdd = () => {
    setIsAdding(true);
  };
  const onCloseAdd = () => {
    setIsAdding(false);
  };
  const onEdit = (jobAppl: JobApplication) => {
    setJobApplToEdit(jobAppl);
    setIsEditing(true);
  };
  const onCloseEdit = () => {
    setIsEditing(false);
  };

  return (
    <Section className="pv6">
      <JobApplBoard
        jobApplList={jobApplList}
        onAddJobClick={onAdd}
        onEditJobClick={onEdit}
      />

      <FadeIn in={isEditing}>
        <div className="bg-mid-gray fixed h-100 w-100 top-0 left-0"></div>
      </FadeIn>
      <SlideLeft in={isEditing}>
        <div className=" ml7-l h-100 bg-white ph2 ph4-ns pr6-l pv4 overflow-y-scroll">
          <a
            onClick={() => {
              onCloseEdit();
            }}
          >
            X
          </a>
          {jobApplToEdit ? (
            <EditJobForm jobApplication={jobApplToEdit} />
          ) : (
            <ErrorMsg text="Some thing went wrong!" />
          )}
        </div>
      </SlideLeft>
    </Section>
  );
};
