import { LogStatuses, type TLogStatus } from '../constants/log-statuses';

export interface IStatusTagConfig {
  bg: string;
  color: string;
  borderColor: string;
  labelKey: string;
  defaultLabel: string;
}

export const statusTagConfig: Record<TLogStatus, IStatusTagConfig> = {
  [LogStatuses.VIEW]: {
    bg: 'var(--ant-cyan-1)',
    color: 'var(--ant-cyan-7)',
    borderColor: 'var(--ant-cyan-3)',
    labelKey: 'logs.statuses.view',
    defaultLabel: 'View',
  },
  [LogStatuses.CREATE]: {
    bg: 'var(--ant-blue-1)',
    color: 'var(--ant-blue-7)',
    borderColor: 'var(--ant-blue-3)',
    labelKey: 'logs.statuses.create',
    defaultLabel: 'Create',
  },
  [LogStatuses.MODIFY]: {
    bg: 'var(--ant-orange-1)',
    color: 'var(--ant-orange-7)',
    borderColor: 'var(--ant-orange-3)',
    labelKey: 'logs.statuses.modify',
    defaultLabel: 'Modify',
  },
} as const;
