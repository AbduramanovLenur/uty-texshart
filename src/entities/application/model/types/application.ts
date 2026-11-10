import type { ComponentType } from 'react';

import type { ApprovalStatuses } from '../constants/approval-statuses';
import type { NetworkTypes } from '../constants/network-types';
import type { Statuses } from '../constants/stutuses';

import type { TStatus } from '@shared/types';

export type TApprovalStatus =
  (typeof ApprovalStatuses)[keyof typeof ApprovalStatuses];

export type TNetworkType =
  (typeof NetworkTypes)[keyof typeof NetworkTypes];

export type TApplicationTimelineStatus =
  (typeof Statuses)[keyof typeof Statuses];

export interface IApplicationPreview {
  id: number;
  code: string;
  type: TNetworkType;
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}

export interface ITimelineApproval {
  id?: string | number;
  title: string;
  person: string;
  text?: string;
  status: TApprovalStatus;
  date?: string;
}

export interface ITimelineStep {
  id: string | number;
  step: number;
  title: string;
  status: TApplicationTimelineStatus;
  date?: string;
  text?: string;
  employee?: string;
  buttonText?: string;
  fileUrl?: string;
  approvals?: ITimelineApproval[];
}

export interface IApplicationStatusTagConfig {
  bg: string;
  color: string;
  borderColor: string;
  labelKey: string;
}

export interface IApplication {
  key: string;
  id: string;
  network: string;
  mtu: string;
  km: string;
  status: TStatus;
  date: string;
  updatedAt: string;
}

export interface IIncomingApplication extends IApplication {
  user: string;
}

export interface IPreviewFile {
  url: string;
  name: string;
  size: string;
  extensionFile: string;
}

export interface IApprovalStatusConfig {
  className: string;
  icon: ComponentType;
  labelKey: string;
}
