import React from "react";
import "./JobCard.css";
interface Props {
  // className?: string;
  // style?: React.CSSProperties;
  // status?: "Active" | "Follow up" | "Interview" | "Archieved";
  jobAppl: {
    id: number;
    companyName: string;
    jobDescription: string;
    jobTitle: string;
    status: string;
  };
  onClick?: () => void;
}

class JobCard extends React.Component<Props, {}> {
  render() {
    const { jobAppl, onClick } = this.props;

    let clName = "pa4 grow bw2 shadow-5 ";

    if (jobAppl.status === "Active") clName += " bg-light-blue";
    if (jobAppl.status === "Follow up") clName += " bg-light-purple";
    if (jobAppl.status === "Interview") clName += " bg-light-red";
    if (jobAppl.status === "Archieved") clName += " bg-light-yellow";

    return (
      <div className="fl w-50-m w-third-ns dib pa2" onClick={onClick}>
        <div className={clName} style={{ height: "300px" }}>
          <h4 className="">{jobAppl.companyName}</h4>
          <h5 className="">{jobAppl.jobTitle}</h5>
          <p className="block-with-text ">{jobAppl.jobDescription}</p>
        </div>
      </div>
    );
  }
}
export default JobCard;
