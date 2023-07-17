import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface TimeTrackingInterface {
  id?: string;
  hours: number;
  team_id?: string;
  created_at?: any;
  updated_at?: any;

  team?: TeamInterface;
  _count?: {};
}

export interface TimeTrackingGetQueryInterface extends GetQueryInterface {
  id?: string;
  team_id?: string;
}
