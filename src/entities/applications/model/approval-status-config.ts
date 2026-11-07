import { IconChecked, IconClock } from '@shared/assets';

import { approvalStatuses } from './approval-statuses';
import type { IApprovalStatusConfig, TApprovalStatus } from './types';

export const approvalStatusConfig: Partial<Record<TApprovalStatus, IApprovalStatusConfig>> = {
  [approvalStatuses.FORMED]: {
    className: 'timeline-act-approvals__status-formed',
    icon: IconChecked,
    labelKey: 'applicationsTimeline.formed',
  },
  [approvalStatuses.CONFIRMED]: {
    className: 'timeline-act-approvals__status-confirmed',
    icon: IconChecked,
    labelKey: 'applicationsTimeline.confirmed',
  },
  [approvalStatuses.PENDING]: {
    className: 'timeline-act-approvals__status-pending',
    icon: IconClock,
    labelKey: 'applicationsTimeline.pending',
  },
};
