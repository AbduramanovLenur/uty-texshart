import { Statuses } from './stutuses';

export const statusClasses = {
  [Statuses.ACTIVE]: 'status-active',
  [Statuses.PENDING]: 'status-pending',
  [Statuses.DONE]: 'status-done',
  [Statuses.ERROR]: 'status-error',
  [Statuses.SKIPPED]: 'status-skipped',
} as const;
