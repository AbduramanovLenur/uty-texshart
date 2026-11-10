import type { ComponentType } from 'react';

import type { ApprovalStatuses } from '../constants/approval-statuses';

export type TApprovalStatus =
  (typeof ApprovalStatuses)[keyof typeof ApprovalStatuses];

export interface IApprovalStatusConfig {
  className: string;
  icon: ComponentType;
  labelKey: string;
}
