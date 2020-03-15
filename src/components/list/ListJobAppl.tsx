import React from "react";
import JobCard from "../job-card/JobCard";

interface Props {
  jobApplList: any[];
}

class ListJobAppl extends React.Component<Props, {}> {
  render() {
    return this.props.jobApplList.map(({ statusDate, jobUrl, ...job }: any) => {
      return <JobCard jobAppl={job} />;
    });
  }
}
export default ListJobAppl;
