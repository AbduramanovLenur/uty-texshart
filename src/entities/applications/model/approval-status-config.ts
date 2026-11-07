import { IconChecked, IconClock, IconXMark } from '@shared/assets';

import { approvalStatuses } from './approval-statuses';
import type { IApprovalStatusConfig, TApprovalStatus } from './types';

export const approvalStatusConfig: Partial<Record<TApprovalStatus, IApprovalStatusConfig>> = {
  [approvalStatuses.FORMED]: {
    className: 'application-approvals__status-formed',
    icon: IconChecked,
    labelKey: 'applicationsTimeline.formed',
  },
  [approvalStatuses.CONFIRMED]: {
    className: 'application-approvals__status-confirmed',
    icon: IconChecked,
    labelKey: 'applicationsTimeline.confirmed',
  },
  [approvalStatuses.PENDING]: {
    className: 'application-approvals__status-pending',
    icon: IconClock,
    labelKey: 'applicationsTimeline.pending',
  },
  [approvalStatuses.REJECTED]: {
    className: 'application-approvals__status-rejected',
    icon: IconXMark,
    labelKey: 'applicationsTimeline.rejected',
  },
};
