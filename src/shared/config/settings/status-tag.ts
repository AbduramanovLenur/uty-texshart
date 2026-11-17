import { Statuses } from '../constants/statuses';
import type { TStatus, IStatusTagConfig } from '@shared/types';

export const statusTagConfig: Record<TStatus, IStatusTagConfig> = {
  [Statuses.DRAFT]: {
    bg: 'var(--ant-tag-default-bg)',
    color: 'var(--dark-88)',
    borderColor: 'var(--ant-tag-default-border)',
    labelKey: 'statuses.draft',
  },
  [Statuses.SUBMITTED]: {
    bg: 'var(--ant-geekblue-1)',
    color: 'var(--ant-geekblue-7)',
    borderColor: 'var(--ant-geekblue-3)',
    labelKey: 'statuses.submitted',
  },
  [Statuses.PAYMENT_DONE]: {
    bg: 'var(--ant-lime-1)',
    color: 'var(--ant-lime-7)',
    borderColor: 'var(--ant-lime-3)',
    labelKey: 'statuses.paymentDone',
  },
  [Statuses.ACCEPTED]: {
    bg: 'var(--ant-geekblue-1)',
    color: 'var(--ant-geekblue-7)',
    borderColor: 'var(--ant-geekblue-3)',
    labelKey: 'statuses.accepted',
  },
  [Statuses.FORWARDED]: {
    bg: 'var(--ant-cyan-1)',
    color: 'var(--ant-cyan-7)',
    borderColor: 'var(--ant-cyan-3)',
    labelKey: 'statuses.forwarded',
  },
  [Statuses.ACT_CREATED]: {
    bg: 'var(--ant-orange-1)',
    color: 'var(--ant-orange-7)',
    borderColor: 'var(--ant-orange-3)',
    labelKey: 'statuses.actCreated',
  },
  [Statuses.ACT_CONFIRMED]: {
    bg: 'var(--ant-orange-1)',
    color: 'var(--ant-orange-7)',
    borderColor: 'var(--ant-orange-3)',
    labelKey: 'statuses.actConfirmed',
  },
  [Statuses.TECHNICAL_CONDITIONS_ISSUED]: {
    bg: 'var(--ant-blue-1)',
    color: 'var(--ant-blue-7)',
    borderColor: 'var(--ant-blue-3)',
    labelKey: 'statuses.technicalConditionsIssued',
  },
  [Statuses.PROJECT_DOCUMENTS_UPLOADED]: {
    bg: 'var(--ant-magenta-1)',
    color: 'var(--ant-magenta-7)',
    borderColor: 'var(--ant-magenta-3)',
    labelKey: 'statuses.projectDocumentsUploaded',
  },
  [Statuses.CONSTRUCTION_PERMIT_ISSUED]: {
    bg: 'var(--ant-purple-1)',
    color: 'var(--ant-purple-7)',
    borderColor: 'var(--ant-purple-3)',
    labelKey: 'statuses.constructionPermitIssued',
  },
  [Statuses.CONSTRUCTION_STARTED]: {
    bg: 'var(--ant-purple-1)',
    color: 'var(--ant-purple-7)',
    borderColor: 'var(--ant-purple-3)',
    labelKey: 'statuses.constructionStarted',
  },
  [Statuses.CONSTRUCTION_COMPLETED]: {
    bg: 'var(--ant-purple-1)',
    color: 'var(--ant-purple-7)',
    borderColor: 'var(--ant-purple-3)',
    labelKey: 'statuses.constructionCompleted',
  },
  [Statuses.CONSTRUCTION_ACT_UPLOADED]: {
    bg: 'var(--ant-purple-1)',
    color: 'var(--ant-purple-7)',
    borderColor: 'var(--ant-purple-3)',
    labelKey: 'statuses.constructionActUploaded',
  },
  [Statuses.COMPLETED]: {
    bg: 'var(--ant-green-1)',
    color: 'var(--ant-green-7)',
    borderColor: 'var(--ant-green-3)',
    labelKey: 'statuses.completed',
  },
  [Statuses.REJECTED]: {
    bg: 'var(--ant-red-1)',
    color: 'var(--ant-red-7)',
    borderColor: 'var(--ant-red-3)',
    labelKey: 'statuses.rejected',
  },
} as const;
