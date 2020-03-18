import { Document } from "./DocumentInterface";
import { JobApplicationLog } from "./JobApplicationLog";

export interface JobApplication {
  id: number;
  companyName: string;
  jobDescription: string;
  jobTitle: string;
  status: string;
  statusDate: string;
  jobUrl: string;
  documentsList: Document[];
  jobApplicationLog: JobApplicationLog[];
  reminderOn: boolean;
  reminderDate: string;
  reminderTime: string;
}
