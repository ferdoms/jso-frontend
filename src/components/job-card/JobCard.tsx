import React from "react";
import "./JobCard.css";
interface Props {
  // className?: string;
  // style?: React.CSSProperties;
  type?: "PRIMARY" | "SECONDARY" | "DANGER" | "GRAY";
  jobAppl: {
    id:number
    companyName: string;
    description: string;
    title: string;
    status: string;
  };
  icon?: string;
  onClick?: () => void;
}

class JobCard extends React.Component<Props, {}> {
  render() {
    const { type, jobAppl, onClick } = this.props;

    let clName = "bg-light-green pa4 grow bw2 shadow-5";

    // // if solid attribuite is true add classes to make the button solid
    // solid
    //   ? (clName += "white bg-" + type.toLocaleLowerCase())
    //   : (clName += "ba " + type.toLocaleLowerCase());

    return (
      <div className="fl w-50-m w-third-ns dib pa2">
        <div className={clName}>
          <h4 className="">{jobAppl.companyName}</h4>
          <h5 className="">{jobAppl.title}</h5>
          <p className="block-with-text ">{jobAppl.description}</p>
        </div>
      </div>
    );
  }
}
export default JobCard;
