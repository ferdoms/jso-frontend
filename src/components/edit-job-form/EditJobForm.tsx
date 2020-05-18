import React from "react";
import Btn from "../button/Button";
import { Input } from "../input/Input";
import jobApplicationValidate from "../../validations/jobApplicationValidate";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { JobApplicationInterface } from "../../interfaces/JobApplicationInterface";
import { JobApplicationLog } from "../../interfaces/JobApplicationLog";
import { DocumentInterface } from "../../interfaces/DocumentInterface";
import ListLogs from "../list-logs/ListLogs";
import ListDocs from "../list-docs/ListDocs";
import { TextArea } from "../text-area/TextArea";
import { InputFile } from "../input-file/InputFile";
import { ValidationError } from "@hapi/joi";
import ValidationErrorMsg from "../validation-error-msg/ValidationErrorMsg";

interface Props {
  jobApplication: JobApplicationInterface;
  onSubmit?: (jobAppl: JobApplicationInterface) => void;
}

interface State {
  id: number;
  companyName: string;
  jobDescription: string;
  jobTitle: string;
  status: "Active" | "Follow up" | "Interview" | "Archived";
  statusDate: string;
  jobUrl: string;
  documentList: DocumentInterface[];
  jobApplicationLog: JobApplicationLog[];
  validationError: ValidationError | undefined;
  pageError: string | undefined;
}

export class EditJobForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const {
      id,
      companyName,
      jobDescription,
      jobTitle,
      status,
      statusDate,
      jobUrl,
      documentList,
      jobApplicationLog
    } = this.props.jobApplication;
    this.state = {
      id,
      companyName,
      jobDescription,
      jobTitle,
      status,
      statusDate,
      jobUrl,
      documentList,
      jobApplicationLog,
      validationError: undefined,
      pageError: undefined
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFileChange = this._handleFileChange.bind(this);
  }

  private _handleChange(e: any) {
    let data: any = this.state;
    data[e.target.id] = e.target.value;
    data.validationError = "";
    data.validationError = undefined;
    this.setState(data);
  }

  private async _handleSubmit() {
    const { onSubmit } = this.props;
    const { validationError, ...job } = this.state;

    const validationResult = jobApplicationValidate(job);
    if (validationResult.error) this.setState({ validationError: validationResult.error });

      if (onSubmit && !validationResult.error) {
        try{  
          await onSubmit(job as JobApplicationInterface);
        }catch(e){
          console.log(e)
          //page error
          this.setState({pageError: "Could not save this Job Application. Please try again!"})
        }
       
    }
  }

  private _handleFileChange(e: any) {
    // TODO method to upload files
    // TODO save to array only if documents were uploaded
    const documentList: DocumentInterface[] = this.state.documentList;
    Array.from(e.target.files).forEach((item: any) => {
      documentList.push({ name: item.name });
    });
    this.setState({ documentList });




    // this.setState({ documentList });
  }

  render() {
    const {
      companyName,
      jobDescription,
      jobTitle,
      status,
      statusDate,
      jobUrl,
      documentList,
      jobApplicationLog,
      validationError,
      pageError
    } = this.state;
    return (
      <div className="pv3">
        <h3 className="f3 pa2">Job Application</h3>
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-column w-100 w-75-l pr3-l mb4">
            <div className="flex flex-column w-50-ns">
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
            </div>
            <TextArea
              inputLabel="Job Description"
              id="jobDescription"
              value={jobDescription}
              onChange={this._handleChange}
            />
            <Input
              id="jobUrl"
              inputLabel="Url"
              type="text"
              value={jobUrl}
              onChange={this._handleChange}
            />
            <ValidationErrorMsg error={validationError} />
            {pageError ? <ErrorMsg text={pageError} />:<></> }
            
            <div className="dib">
              <Btn label="Save" type="SECONDARY" onClick={this._handleSubmit} />
            </div>
          </div>

          <div className="flex flex-column tc w-75 w-25-l">
            <Btn
              solid={!(status === "Active")}
              label="Active"
              type="ACTIVE-SKIN"
              onClick={() => {
                this.setState({ status: "Active" });
              }}
            />
            <Btn
              solid={!(status === "Interview")}
              label="Interview"
              type="INTERVIEW-SKIN"
              onClick={() => {
                this.setState({ status: "Interview" });
              }}
            />
            <Btn
              solid={!(status === "Follow up")}
              label="Follow up"
              type="FOLLOWUP-SKIN"
              onClick={() => {
                this.setState({ status: "Follow up" });
              }}
            />
            <Btn
              solid={!(status === "Archived")}
              label="Archived"
              type="ARCHIVED-SKIN"
              onClick={() => {
                this.setState({ status: "Archived" });
              }}
            />

            <div className="mv2">
              <h5 className="mv3 gray">Logs</h5>
              <div className="h4 overflow-scroll overflow-x-hidden">
                <ListLogs
                  logsList={jobApplicationLog}
                  companyName={companyName}
                />
              </div>
            </div>
            <div className="mv2 ">
              <h5 className="mv3 gray">Docs</h5>
              <div className="">
                {documentList ? (
                  <ListDocs
                    docsList={documentList}
                    onClick={(item: any) => {}}
                  />
                ) : (
                  "No documents uploaded"
                )}
              </div>
              <InputFile
                label="Upload document"
                onChange={this._handleFileChange}
                multiple
                accept=".doc, .docx, .pdf"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
