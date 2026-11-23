import { LogStatuses, type TLogStatus } from '../constants/log-statuses';

import type { IStatusTagConfig } from '@shared/types';

export const statusTagConfig: Record<TLogStatus, IStatusTagConfig> = {
  [LogStatuses.VIEW]: {
    bg: 'var(--ant-cyan-1)',
    color: 'var(--ant-cyan-7)',
    borderColor: 'var(--ant-cyan-3)',
    labelKey: 'logs.statuses.view',
  },
  [LogStatuses.CREATE]: {
    bg: 'var(--ant-blue-1)',
    color: 'var(--ant-blue-7)',
    borderColor: 'var(--ant-blue-3)',
    labelKey: 'logs.statuses.create',
  },
  [LogStatuses.MODIFY]: {
    bg: 'var(--ant-orange-1)',
    color: 'var(--ant-orange-7)',
    borderColor: 'var(--ant-orange-3)',
    labelKey: 'logs.statuses.modify',
  },
} as const;
