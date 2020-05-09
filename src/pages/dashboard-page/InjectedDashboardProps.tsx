import { JobApplicationInterface } from "../../interfaces";

export interface InjectedDashboardProps {
    getJobApplications?: () => JobApplicationInterface[];
    createJobApplication?: (ja: JobApplicationInterface) => JobApplicationInterface;
    updateJobApplication?: (ja: JobApplicationInterface) => void;
}
  