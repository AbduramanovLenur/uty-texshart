import type { Statuses } from '../constants/stutuses';

import type { TApprovalStatus } from './approval-status';

export type TApplicationTimelineStatus = (typeof Statuses)[keyof typeof Statuses];

export interface ITimelineApproval {
  id?: string | number;
  title: string;
  person: string;
  text?: string;
  status: TApprovalStatus;
  date?: string;
}

export interface ITimelineStep {
  id: string | number;
  step: number;
  title: string;
  status: TApplicationTimelineStatus;
  date?: string;
  text?: string;
  employee?: string;
  buttonText?: string;
  fileUrl?: string;
  approvals?: ITimelineApproval[];
}
