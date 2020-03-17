import React from "react";
import Tab from "../tab/Tab";
import ListJobAppl from "../list/ListJobAppl";
import { jobApplList } from "../../pages/dashboard-page/mockData";
import { Input } from "../input/Input";
import Button from "../button/Button";
import { Combobox } from "../combobox/combobox";

interface Props {
  jobApplList: any[];
}

interface State {
  activeTab: string;
  searchFilter: string;
  comboFilter:string;
}

class JobApplBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: "Active",
      searchFilter: "",
      comboFilter:"statusDate"
    };
    this._handleTabChange = this._handleTabChange.bind(this);
    this._handleSearchChange = this._handleSearchChange.bind(this);
    this._handleComboChange = this._handleComboChange.bind(this);
  }

  /**
   * Handle actions to be taken when a tab is selected
   * @param {string} activeTab Tab that is active 
   */
  private _handleTabChange(activeTab: string) {
    // set active tab and set default values
    this.setState({ activeTab, searchFilter:""});
  }
  private _handleSearchChange(e: any) {
    let state: any = this.state;
    state[e.target.id] = e.target.value;
    this.setState(state);
  }
  private _handleComboChange(value: any) {
    let state: any = this.state;
    state.comboFilter = value;
    this.setState(state);
  }
  render() {
    const { jobApplList } = this.props;
    const { activeTab, searchFilter, comboFilter } = this.state;

    let jobsFiltered;

    if (activeTab === "All") {
      jobsFiltered = jobApplList;
    } else {
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

     jobsFiltered.sort((a, b) => (a[comboFilter] > b[comboFilter]) ? 1 : -1)
    return (
      <div>
        <Tab onChange={this._handleTabChange} />

        <div className="flex flex-column flex-row-ns items-center mt3">
          <div className="flex flex-column ph2 w-100-ns">
            
            <Input
              id="searchFilter"
              inputLabel="Search"
              onChange={this._handleSearchChange}
              type="text"
              value={searchFilter}
            />
          </div>
          <div className="ph2">
            <Combobox options={["Status Date", "Company Name", "Job Title"]} id="comboFilter" value={comboFilter} onChange={this._handleComboChange}/>
          </div>
          <div className="ph2">
            <Button label="+" onClick={() => {}} type="GRAY" solid circle />
          </div>
        </div>

        <div className="flex flex-wrap">
          <ListJobAppl jobApplList={jobsFiltered} />
        </div>
      </div>
    );
  }
}
export default JobApplBoard;
