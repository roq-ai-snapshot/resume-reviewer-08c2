import { ApplicationInterface } from 'interfaces/application';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  application_id: string;
  reviewer_id: string;
  rating?: number;
  comments?: string;
  reviewed_at?: any;
  created_at?: any;
  updated_at?: any;

  application?: ApplicationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  application_id?: string;
  reviewer_id?: string;
  comments?: string;
}
