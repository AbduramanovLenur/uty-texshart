import { statuses } from './stutuses';

export const statusClasses = {
  [statuses.ACTIVE]: 'status-active',
  [statuses.PENDING]: 'status-pending',
  [statuses.DONE]: 'status-done',
  [statuses.ERROR]: 'status-error',
  [statuses.SKIPPED]: 'status-skipped',
};
