import React from "react";
import JobCard from "../job-card/JobCard";

interface Props {
  jobApplList: any[];
  onSelect: (id:number)=>void;
}

class ListJobAppl extends React.Component<Props, {}> {
  
  render() {
    const { jobApplList, onSelect } = this.props;

    // return a list of job cards
    return jobApplList.map(({ statusDate, jobUrl, ...job }: any, index:number) => {
      return <JobCard jobAppl={job} key={index} onClick={()=>{
        onSelect(job.id)}}/>;
    });
  }
}
export default ListJobAppl;
