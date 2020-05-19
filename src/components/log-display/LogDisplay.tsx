import React from "react";
import { JobApplicationLog } from "../../interfaces/JobApplicationLog";

interface Props {
  companyName: string;
  logData: JobApplicationLog;
}

export const LogDisplay: React.FC<Props> = (props: Props) => {
  const { actualStatus, logDate, previousStatus } = props.logData;
  const { companyName } = props;

  const styleHelper = (status:string) =>{
    return status.replace(" ","").toLocaleLowerCase()+"-skin"
  }
  return (
    <div className="dt cf pb2 mb2 f7 bb b--light-gray w-100">
      <div className="dtc w-two-thirds pr2">
        <span className="b">{companyName.toUpperCase() + " "}</span>went
        from
        <span className={"b " + styleHelper(previousStatus)}>{" " + previousStatus + " "}</span>to
        <span className={"b " + styleHelper(actualStatus)}>{" " + actualStatus + " "} </span>
      </div>
      <div className="dtc w-third v-mid">{" " + logDate}</div>
    </div>
  );
};
