import { IconChecked, IconClock, IconXMark } from '@shared/assets';

import { ApprovalStatuses } from '../constants/approval-statuses';
import type { IApprovalStatusConfig, TApprovalStatus } from '../types/application';

export const approvalStatusConfig: Partial<Record<TApprovalStatus, IApprovalStatusConfig>> = {
  [ApprovalStatuses.FORMED]: {
    className: 'application-approvals__status-formed',
    icon: IconChecked,
    labelKey: 'applicationsTimeline.formed',
  },
  [ApprovalStatuses.CONFIRMED]: {
    className: 'application-approvals__status-confirmed',
    icon: IconChecked,
    labelKey: 'applicationsTimeline.confirmed',
  },
  [ApprovalStatuses.PENDING]: {
    className: 'application-approvals__status-pending',
    icon: IconClock,
    labelKey: 'applicationsTimeline.pending',
  },
  [ApprovalStatuses.REJECTED]: {
    className: 'application-approvals__status-rejected',
    icon: IconXMark,
    labelKey: 'applicationsTimeline.rejected',
  },
} as const;
