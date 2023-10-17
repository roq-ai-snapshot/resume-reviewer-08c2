import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { JobPostingInterface } from 'interfaces/job-posting';
import { ResumeInterface } from 'interfaces/resume';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  user_id: string;
  job_posting_id: string;
  resume_id: string;
  status: string;
  applied_at?: any;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  user?: UserInterface;
  job_posting?: JobPostingInterface;
  resume?: ResumeInterface;
  _count?: {
    review?: number;
  };
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_posting_id?: string;
  resume_id?: string;
  status?: string;
}
