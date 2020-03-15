import React from "react";

interface Props {

  
}

interface State {
  activeTabId: number;
}

// tabs titles
const tabs = ["Active", "Follow up", "Interview", "Archieved", "All"];

class Tab extends React.Component<Props, State> {
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
    

    return <div className="w-100 flex">{this._renderTab(tabs)}</div>;
  }
}
export default Tab;
