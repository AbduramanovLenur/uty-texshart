import type { TLogStatus } from '../constants/log-statuses';

export interface ILogItem {
  key: string;
  number: number;
  user: string;
  role: string;
  status: TLogStatus;
  actionText: string;
  targetId?: string;
  date: string;
}
