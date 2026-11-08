import { ApplicationStatuses } from '../constants/application-statuses';
import type { IApplicationStatusTagConfig, TApplicationStatus } from '../types/application';

export const applicationStatusTagConfig: Record<TApplicationStatus, IApplicationStatusTagConfig> = {
  [ApplicationStatuses.ACCEPTED]: {
    bg: 'var(--ant-cyan-1)',
    color: 'var(--ant-cyan-7)',
    borderColor: 'var(--ant-cyan-3)',
    labelKey: 'statuses.accepted',
  },
  [ApplicationStatuses.FORWARDED]: {
    bg: 'var(--ant-magenta-1)',
    color: 'var(--ant-magenta-7)',
    borderColor: 'var(--ant-magenta-3)',
    labelKey: 'statuses.forwarded',
  },
  [ApplicationStatuses.ACT_CREATED]: {
    bg: 'var(--ant-orange-1)',
    color: 'var(--ant-orange-7)',
    borderColor: 'var(--ant-orange-3)',
    labelKey: 'statuses.actCreated',
  },
  [ApplicationStatuses.TECHNICAL_CONDITIONS_ISSUED]: {
    bg: 'var(--ant-blue-1)',
    color: 'var(--ant-blue-7)',
    borderColor: 'var(--ant-blue-3)',
    labelKey: 'statuses.technicalConditionsIssued',
  },
  [ApplicationStatuses.REJECTED]: {
    bg: 'var(--ant-red-1)',
    color: 'var(--ant-red-7)',
    borderColor: 'var(--ant-red-3)',
    labelKey: 'statuses.rejected',
  },
  [ApplicationStatuses.DRAFT]: {
    bg: 'var(--ant-tag-default-bg)',
    color: 'var(--dark-88)',
    borderColor: 'var(--ant-tag-default-border)',
    labelKey: 'statuses.draft',
  },
  [ApplicationStatuses.CONSTRUCTION_STARTED]: {
    bg: 'var(--ant-purple-1)',
    color: 'var(--ant-purple-7)',
    borderColor: 'var(--ant-purple-3)',
    labelKey: 'statuses.constructionStarted',
  },
  [ApplicationStatuses.COMPLETED]: {
    bg: 'var(--ant-green-1)',
    color: 'var(--ant-green-7)',
    borderColor: 'var(--ant-green-3)',
    labelKey: 'statuses.completed',
  },
} as const;
