import React from "react";
import Tab from "../tab/Tab";
import ListJobAppl from "../list/ListJobAppl";
import { jobApplList } from "../../pages/dashboard-page/mockData";

interface Props {

  jobApplList: any []
}

interface State {
  activeTab: string;
}

class JobApplBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: "Active",
    };
    this._handleTabChange = this._handleTabChange.bind(this)
  }

  private _handleTabChange(activeTab:string){
    this.setState({activeTab})
  }
  render() {
    const { jobApplList } = this.props;
    const { activeTab } = this.state;

    let jobsFiltered = this.props.jobApplList.filter((job:any)=>job.status === this.state.activeTab)


    return <div>
      <Tab onChange={this._handleTabChange}/>

      <div className="flex flex-wrap">
        <ListJobAppl jobApplList={activeTab==="All" ? jobApplList : jobsFiltered}/>
      </div>
      
      
    
    </div>;
  }
}
export default JobApplBoard;
