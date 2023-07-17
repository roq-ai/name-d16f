import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  score: number;
  team_id?: string;
  created_at?: any;
  updated_at?: any;

  team?: TeamInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  team_id?: string;
}
