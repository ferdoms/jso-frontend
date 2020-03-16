import React from "react";
import Tab from "../tab/Tab";
import ListJobAppl from "../list/ListJobAppl";
import { jobApplList } from "../../pages/dashboard-page/mockData";
import { Input } from "../input/Input";

interface Props {
  jobApplList: any[];
}

interface State {
  activeTab: string;
  searchFilter: string;
}

class JobApplBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: "Active",
      searchFilter: ""
    };
    this._handleTabChange = this._handleTabChange.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
  }

  private _handleTabChange(activeTab: string) {
    this.setState({ activeTab });
  }
  private _handleSearchChange(e: any) {
    let state: any = this.state;
    state[e.target.id] = e.target.value;
    this.setState(state);
  }
  render() {
    const { jobApplList } = this.props;
    const { activeTab, searchFilter } = this.state;

    let jobsFiltered;
    
    if(activeTab === "All") {
      jobsFiltered = jobApplList
    }else {
      jobsFiltered = this.props.jobApplList.filter(
        (job: any) => job.status === activeTab 
      );
    } 

    if (searchFilter !== "")
      jobsFiltered = jobsFiltered.filter(
        (job: any) =>
          job.companyName.includes(searchFilter) ||
          job.jobDescription.includes(searchFilter) ||
          job.jobTitle.includes(searchFilter)
      );

    return (
      <div>
        <Tab onChange={this._handleTabChange} />
        <Input
          id="searchFilter"
          inputLabel="Search"
          onChange={this._handleSearchChange}
          type="string"
          value={searchFilter}
        />
        <div className="flex flex-wrap">
          <ListJobAppl
            jobApplList={jobsFiltered}
          />
        </div>
      </div>
    );
  }
}
export default JobApplBoard;
