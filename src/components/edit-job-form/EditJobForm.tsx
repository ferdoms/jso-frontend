import React from "react";
import Btn from "../button/Button";
import { Input } from "../input/Input";
import profileFormValidate from "../../validation/profileFormValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { JobApplication } from "../../interfaces/JobApplicationInterface";
import { JobApplicationLog } from "../../interfaces/JobApplicationLog";
import { Document } from "../../interfaces/DocumentInterface";

interface Props {
  jobApplication: JobApplication;
  onSubmit?: ({}: any) => void;
}

interface State {
  companyName: string;
  jobDescription: string;
  jobTitle: string;
  status: string;
  statusDate: string;
  jobUrl: string;
  documentsList: Document[];
  jobApplicationLog: JobApplicationLog[];
  err: string | undefined;
}

export class EditJobForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const {
      companyName,
      jobDescription,
      jobTitle,
      status,
      statusDate,
      jobUrl,
      documentsList,
      jobApplicationLog
    } = this.props.jobApplication;
    this.state = {
      companyName,
      jobDescription,
      jobTitle,
      status,
      statusDate,
      jobUrl,
      documentsList,
      jobApplicationLog,
      err: undefined
    };
    console.log(props.jobApplication);
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  private _handleChange(e: any) {
    let data: any = this.state;
    data[e.target.id] = e.target.value;
    data.err = "";
    this.setState(data);
  }
  private _handleSubmit() {
    const { onSubmit } = this.props;

    // let result = profileFormValidate({
    //   fname,
    //   lname,
    //   email
    // });

    // if (!!result.error) {
    //   this.setState({ err: result.error.message });
    // } else {
    //   if (onSubmit) onSubmit({ fname, lname, email });
    // }
  }

  render() {
    const {
      companyName,
      jobDescription,
      jobTitle,
      status,
      statusDate,
      jobUrl,
      documentsList,
      jobApplicationLog
    } = this.state;
    return (
      <div className="pv3">
        <h3 className="f3 pa2">Edit Profile</h3>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-column w-75-l pr3-l mb4">
            <Input
              id="companyName"
              inputLabel="Company Name"
              type="text"
              value={companyName}
              onChange={this._handleChange}
            />
            <Input
              id="jobTitle"
              inputLabel="Job Title"
              type="text"
              value={jobTitle}
              onChange={this._handleChange}
            />

            {/* SPACE FOR TEXTAREA */}
            <div className="ba b--light-gray">{jobDescription}</div>

            {/* SPACE FOR TEXTAREA */}
            <Input
              id="jobUrl"
              inputLabel="Url"
              type="text"
              value={jobUrl}
              onChange={this._handleChange}
            />
            <ErrorMsg text={this.state.err} />
            <div className="dib">
            <Btn label="Save" type="SECONDARY" onClick={this._handleSubmit} />
          

            </div>
            </div>

          <div className="flex flex-column w-75 w-25-l">
            <Btn label="Save" type="SECONDARY" onClick={this._handleSubmit} />
            <Btn label="Save" type="SECONDARY" onClick={this._handleSubmit} />
            <Btn label="Save" type="SECONDARY" onClick={this._handleSubmit} />
            <Btn label="Save" type="SECONDARY" onClick={this._handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
