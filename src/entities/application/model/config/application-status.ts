import { Statuses } from '@shared/config';
import type { TStatus } from '@shared/types';
import type { IApplicationStatusTagConfig } from '../types/application';

export const applicationStatusTagConfig: Record<TStatus, IApplicationStatusTagConfig> = {
  [Statuses.ACCEPTED]: {
    bg: 'var(--ant-cyan-1)',
    color: 'var(--ant-cyan-7)',
    borderColor: 'var(--ant-cyan-3)',
    labelKey: 'statuses.accepted',
  },
  [Statuses.FORWARDED]: {
    bg: 'var(--ant-magenta-1)',
    color: 'var(--ant-magenta-7)',
    borderColor: 'var(--ant-magenta-3)',
    labelKey: 'statuses.forwarded',
  },
  [Statuses.ACT_CREATED]: {
    bg: 'var(--ant-orange-1)',
    color: 'var(--ant-orange-7)',
    borderColor: 'var(--ant-orange-3)',
    labelKey: 'statuses.actCreated',
  },
  [Statuses.TECHNICAL_CONDITIONS_ISSUED]: {
    bg: 'var(--ant-blue-1)',
    color: 'var(--ant-blue-7)',
    borderColor: 'var(--ant-blue-3)',
    labelKey: 'statuses.technicalConditionsIssued',
  },
  [Statuses.REJECTED]: {
    bg: 'var(--ant-red-1)',
    color: 'var(--ant-red-7)',
    borderColor: 'var(--ant-red-3)',
    labelKey: 'statuses.rejected',
  },
  [Statuses.DRAFT]: {
    bg: 'var(--ant-tag-default-bg)',
    color: 'var(--dark-88)',
    borderColor: 'var(--ant-tag-default-border)',
    labelKey: 'statuses.draft',
  },
  [Statuses.CONSTRUCTION_STARTED]: {
    bg: 'var(--ant-purple-1)',
    color: 'var(--ant-purple-7)',
    borderColor: 'var(--ant-purple-3)',
    labelKey: 'statuses.constructionStarted',
  },
  [Statuses.COMPLETED]: {
    bg: 'var(--ant-green-1)',
    color: 'var(--ant-green-7)',
    borderColor: 'var(--ant-green-3)',
    labelKey: 'statuses.completed',
  },
} as const;
