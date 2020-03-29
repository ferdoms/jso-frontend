import React from "react";
import { JobApplicationLog } from "../../interfaces/JobApplicationLog";
import { LogDisplay } from "../log-display/LogDisplay";

interface Props {
  companyName: string;
  logsList: JobApplicationLog[];
}

/**
 * Renders a list of LogDisplay components given list of logs
 */
class ListLogs extends React.Component<Props, {}> {
  render() {
    const { companyName, logsList } = this.props;

    // maps list of logs into a LogDisplay component
    return logsList.map((item: any, index: number) => {
      return (
        <LogDisplay companyName={companyName} logData={item} key={index} />
      );
    });
  }
}
export default ListLogs;
