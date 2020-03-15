import React from "react";
import Tab from "../tab/Tab";
import listJobAppl from "../list/ListJobAppl";
import { jobApplList } from "../../pages/dashboard-page/mockData";

interface Props {

  jobApplList: any[]
}

interface State {
  activeTabId: number;
}

class JobApplBoard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTabId: 0
    };
    this._handleClick = this._handleClick.bind(this)
  }

  private _renderTab(tabs: string[]) {
    return tabs.map((item, index) => {
      return (
        <a
          className={
            "fl w-20 tc f4 pv3 " +
            // Conditional style for highlighting active tab
            (this.state.activeTabId != index ? "bb b--black-20" : " br bl bt b--black-20")
          }
          onClick={this._handleClick}
          id={index.toString()}
          key={index}
        >
          {item}
        </a>
      );
    });
  }
  private _handleClick(e:any){

    this.setState({activeTabId:(e.target.id)})

  }
  render() {
    

    return <div>
      <Tab/>
      {/* <listJobAppl jobs={jobApplList}/> */}
      
    
    </div>;
  }
}
export default JobApplBoard;
