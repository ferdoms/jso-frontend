import { DocumentInterface } from "./DocumentInterface";
import { JobApplicationLog } from "./JobApplicationLog";

export interface JobApplicationInterface {
  id: number;
  companyName: string;
  jobDescription: string;
  jobTitle: string;
  status: "Active" | "Follow up" | "Interview" | "Archived";
  statusDate: string;
  jobUrl: string;
  documentList: DocumentInterface[];
  jobApplicationLog: JobApplicationLog[];
  reminderOn?: boolean;
  reminderDate?: string;
  reminderTime?: string;
  // for file upload
  formData?:FormData;
}
