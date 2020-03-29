import React from "react";
import { JobApplicationLog } from "../../interfaces/JobApplicationLog";

interface Props {
  companyName: string;
  logData: JobApplicationLog;
}

export const LogDisplay: React.FC<Props> = (props: Props) => {
  const { actualStatus, logDate, previousStatus } = props.logData;
  const { companyName } = props;
  return (
    <div className="dt cf pb2 mb2 f7 bb b--light-gray w-100">
      <div className="dtc w-two-thirds pr2">
        <span className="primary">{companyName.toUpperCase() + " "}</span>went
        from
        <span className="primary">{" " + previousStatus + " "}</span>to
        <span className="primary">{" " + actualStatus + " "} </span>
      </div>
      <div className="dtc w-third v-mid">{" " + logDate}</div>
    </div>
  );
};
