import React, { useState, useEffect } from "react";
import Section from "../../components/section/Section";
import { FadeIn } from "../../components/animations/fade-in";
import JobApplBoard from "../../components/job-appl-board/JobApplBoard";
import { jobApplList } from "./mockDatav2";
import { SlideLeft } from "../../components/animations/slide-left";
import { EditJobForm } from "../../components/edit-job-form/EditJobForm";
import { JobApplication } from "../../interfaces/JobApplicationInterface";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import { AddJobForm } from "../../components/add-job-form/AddJobForm";

interface State {
  isAdding: boolean;
  isEditing: boolean;
  jobAppls: JobApplication[];
  jobApplToEdit: JobApplication | null;
}


export class DashboardPage extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAdding: true,
      isEditing: false,
      jobApplToEdit: null,
      jobAppls: []
    };
    this._submitAddJA = this._submitAddJA.bind(this);
    this._submitEditJA = this._submitEditJA.bind(this);
    this._onAdd = this._onAdd.bind(this);
    this._onCloseAdd = this._onCloseAdd.bind(this);
    this._onEdit = this._onEdit.bind(this);
    this._onCloseEdit = this._onCloseEdit.bind(this);
  }
  componentDidMount() {
    this.setState({ jobAppls: jobApplList });
  }

  private _submitEditJA = (job: JobApplication) => {
    let jaList = this.state.jobAppls;

    // find object in the array and update it
    jaList = jaList.map(item => {
      if (item.id === job.id) {
        item = job;
      }
      return item;
    });
    // update state
    this.setState({ jobAppls: jaList });
    // request API to save object

    // close form
    this._onCloseEdit();
  };
  private _submitAddJA = (ja: JobApplication) => {
    let jaList = this.state.jobAppls;

    // request api to create JA

    // update ja id

    // add to the JobAppl array to update view
    jaList.push(ja);

    // update state
    this.setState({ jobAppls: jaList });

    // close form
    this._onCloseAdd();
  };

  private _onAdd = () => {
    this.setState({ isAdding: true });
  };
  private _onCloseAdd = () => {
    this.setState({ isAdding: false });
  };
  private _onEdit(jobAppl: JobApplication) {
    // possibility of a fetch

    this.setState({ jobApplToEdit: jobAppl });
    this.setState({ isEditing: true });
  }
  private _onCloseEdit = () => {
    this.setState({ isEditing: false });
  };
  render() {
    const { isAdding, isEditing, jobApplToEdit, jobAppls } = this.state;
    return (
      <Section className="pv6">
        <JobApplBoard
          jobApplList={jobAppls}
          onAddJobClick={this._onAdd}
          onEditJobClick={this._onEdit}
        />

        <FadeIn in={isEditing || isAdding}>
          <div className="bg-mid-gray fixed h-100 w-100 top-0 left-0"></div>
        </FadeIn>
        <SlideLeft in={isEditing}>
          <div className=" ml7-l h-100 bg-white ph2 ph4-ns pr6-l pv4 overflow-y-scroll">
            <a
              onClick={() => {
                this._onCloseEdit();
              }}
            >
              X
            </a>
            {jobApplToEdit ? (
              <EditJobForm
                jobApplication={jobApplToEdit}
                onSubmit={this._submitEditJA}
              />
            ) : (
              <ErrorMsg text="Some thing went wrong!" />
            )}
          </div>
        </SlideLeft>
        <SlideLeft in={isAdding}>
          <div className=" ml7-l h-100 bg-white ph2 ph4-ns pr6-l pv4 overflow-y-scroll">
            <a
              onClick={() => {
                this._onCloseAdd();
              }}
            >
              X
            </a>
            {<AddJobForm onSubmit={this._submitAddJA} />}
          </div>
        </SlideLeft>
      </Section>
    );
  }
}
