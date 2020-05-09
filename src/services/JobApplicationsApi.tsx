import React, { Component, ComponentType } from "react";
import { JobApplicationInterface } from "../interfaces/JobApplicationInterface";
import { withAuthApi } from "./AuthApi";
import { apiFetch } from "../helpers/api";
import { InjectedDashboardProps } from "../pages/dashboard-page/InjectedDashboardProps";

interface IProps {
}

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
        method: "GET"
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
        body: newJA
      }).then(async (response: any) => {
        // TODO add jobApplication.id from response
        return jobApplication;
      });
    }
    
    async _updateJobApplication(jobApplication: JobApplicationInterface) {
      // this.setState({ isLoggedIn: true });
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
        body: updateJA
      })
    }

    render() {
      return (
        <WrappedComponent
          {...(this.props as P)}
          createJobApplication={this._createJobApplication}
          getJobApplications={this._getJobApplications}
          updateJobApplication={this._updateJobApplication}
        />
      );
    }
  }
  return withAuthApi(ApiContainer);
};
