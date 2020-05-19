import React, { Component, ComponentType } from "react";
import { JobApplicationInterface } from "../interfaces/JobApplicationInterface";
import { withAuthApi } from "./AuthApi";
import { apiFetch } from "../helpers/api";
import { InjectedDashboardProps } from "../pages/dashboard-page/InjectedDashboardProps";
import { DocumentInterface } from "../interfaces";

interface IProps {}

type InjectedProps = InjectedDashboardProps & IProps;

interface ApiContainerState {}
export const withJobApplicationsApi = <P extends InjectedProps>(
  WrappedComponent: ComponentType<P>
) => {
  class ApiContainer extends Component<P, ApiContainerState> {
    endpoint: string | undefined;
    constructor(props: P) {
      super(props);
      this.state = {};
      this._getJobApplications = this._getJobApplications.bind(this);
      this._createJobApplication = this._createJobApplication.bind(this);
      this._updateJobApplication = this._updateJobApplication.bind(this);
      this._uploadFiles = this._uploadFiles.bind(this);
      this._downloadFiles = this._downloadFiles.bind(this);

      if (process.env.REACT_APP_JOBAPPLICATION_API)
        this.endpoint = process.env.REACT_APP_JOBAPPLICATION_API;
      else
        new Error(
          "Property 'REACT_APP_JOBAPPLICATION_API' does not exist on type 'ProcessEnv'"
        );
    }
    async _getJobApplications() {
      const resource = `http://${this.endpoint!}/api/jobapplication`;
      return await apiFetch(resource, {
        method: "GET",
      }).then(async (response: Response) => {
        return await response.json();
      });
    }
    async _createJobApplication(jobApplication: JobApplicationInterface) {
      // this.setState({ isLoggedIn: true });
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      const {
        id,
        reminderDate,
        reminderOn,
        reminderTime,
        jobApplicationLog,
        ...newJA
      } = jobApplication;
      const resource = `http://${this.endpoint!}/api/jobapplication`;
      return await apiFetch(resource, {
        method: "POST",
        body: newJA,
      }).then(async (response: any) => {
        return jobApplication;
      });
    }

    async _updateJobApplication(jobApplication: JobApplicationInterface) {
      // needs to throw erro on any response status but 200
      //throw new Error("could not fetch")
      const {
        id,
        reminderDate,
        reminderOn,
        reminderTime,
        jobApplicationLog,
        ...updateJA
      } = jobApplication;
      const resource = `http://${this.endpoint!}/api/jobapplication/${id}`;
      return await apiFetch(resource, {
        method: "PUT",
        body: updateJA,
      });
    }
    async _uploadFiles(file: FormData) {
      const resource = `http://${this
        .endpoint!}/api/jobapplication/uploadMultipleFiles`;
      return await apiFetch(resource, {
        method: "POST",
        body: file,
      }).then(async (response: any) => {
        console.log(await response.json());
        return response;
      });
    }
    async _downloadFiles(fileName: DocumentInterface) {
      const resource =
        `http://${this.endpoint!}/api/jobapplication/downloadFile/` +
        fileName.name;
      return await apiFetch(resource, {
        method: "GET",
        encoding: null,
      }).then(async (response: any) => {
        return  await response.blob()
      });
    }

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          createJobApplication={this._createJobApplication}
          getJobApplications={this._getJobApplications}
          updateJobApplication={this._updateJobApplication}
          uploadFiles={this._uploadFiles}
          downloadFiles={this._downloadFiles}
        />
      );
    }
  }
  return withAuthApi(ApiContainer);
};
