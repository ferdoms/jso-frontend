import React from "react";
import Section from "../../components/section/Section";
import { FadeIn } from "../../components/animations/fade-in";
import JobApplBoard from "../../components/job-appl-board/JobApplBoard";
import { SlideLeft } from "../../components/animations/slide-left";
import { EditJobForm } from "../../components/edit-job-form/EditJobForm";
import { JobApplicationInterface } from "../../interfaces/JobApplicationInterface";
import ErrorMsg from "../../components/errorMsg/ErrorMsg";
import { AddJobForm } from "../../components/add-job-form/AddJobForm";
import { withLayout } from "../withLayout";
import { InjectedDashboardProps } from "./InjectedDashboardProps";
import { withJobApplicationsApi } from "../../services/JobApplicationsApi";
import * as H from "history";
import * as tokenManager from "../../helpers/tokenHelper";

interface State {
  isAdding: boolean;
  isEditing: boolean;
  jobAppls: JobApplicationInterface[];
  jobApplToEdit: JobApplicationInterface | null;
}

interface IProps {
  history: H.History;

}
type Props = InjectedDashboardProps & IProps;

class InnerDashboardPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isAdding: false,
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
  async componentDidMount() {
      try{
        const jobApplications = await this.props.getJobApplications!();
    this.setState({ jobAppls: jobApplications });
      }catch (e){
        console.log(e)
        this.props.history!.push("/login")
        tokenManager._removeToken()
      }
    
    
  }
  async componentDidUpdate(prevProps: any, prevState: any) {
    if (
      (prevState.isAdding === true && this.state.isAdding === false) ||
      (prevState.isEditing === true && this.state.isEditing === false)
    ) {
      const jobApplications = await this.props.getJobApplications!();
      this.setState({ jobAppls: jobApplications });
      console.log("component up",jobApplications )
    }
  }

  private  _submitEditJA = async (ja: JobApplicationInterface) => {

    try {
      // request api to update JA
      await this.props.updateJobApplication!(ja);

      // close form
      this._onCloseEdit();
    } catch (e) {
      console.log(e);
    }
  };
  private _submitAddJA = async (ja: JobApplicationInterface) => {
    try {
      // request api to create JA
     await this.props.createJobApplication!(ja);

      this._onCloseAdd();
    } catch (e) {
      console.log(e);
    }
  };

  private _onAdd = () => {
    this.setState({ isAdding: true });
  };
  private _onCloseAdd = () => {
    this.setState({ isAdding: false });
  };
  private _onEdit(jobAppl: JobApplicationInterface) {
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

        <FadeIn in={isEditing || isAdding} className="z-5 fixed">
          <div className="bg-mid-gray fixed h-100 w-100 top-0 left-0"></div>
        </FadeIn>
        <SlideLeft in={isEditing} className="z-999 fixed">
          <div className="ml7-l h-100 bg-white ph2 ph4-ns pr6-l pv4 overflow-y-scroll">
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
        <SlideLeft in={isAdding} className="z-999 fixed">
          <div className=" ml7-l h-100 bg-white ph2 ph4-ns pr6-l pv4 overflow-y-scroll z-999">
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

export const InnerDashboardPageWithJobApplicationApi = withJobApplicationsApi(
  InnerDashboardPage
);
export const DashboardPage = withLayout(
  InnerDashboardPageWithJobApplicationApi
);
