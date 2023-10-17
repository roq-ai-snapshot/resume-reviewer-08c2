import { ApplicationInterface } from 'interfaces/application';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ResumeInterface {
  id?: string;
  user_id: string;
  title: string;
  summary?: string;
  work_experience?: string;
  education?: string;
  skills?: string;
  languages?: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
  };
}

export interface ResumeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  title?: string;
  summary?: string;
  work_experience?: string;
  education?: string;
  skills?: string;
  languages?: string;
}
