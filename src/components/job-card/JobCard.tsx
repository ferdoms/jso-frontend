import React from "react";
import "./JobCard.css";
interface Props {
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

    let clName = "pa4 grow bw2 shadow-5 bg-";

    if (jobAppl.status === "Active") clName += "active-skin";
    if (jobAppl.status === "Follow up") clName += "followup-skin";
    if (jobAppl.status === "Interview") clName += "interview-skin";
    if (jobAppl.status === "Archived") clName += "archived-skin";

    return (
      <div className="fl w-100 w-50-m w-third-ns dib pa2" onClick={onClick}>
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
