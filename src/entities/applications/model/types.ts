import type { ReactNode } from 'react';
import type { applicationStatuses } from './application-statuses';
import type { approvalStatuses } from './approval-statuses';
import type { networkTypes } from './network-types';

export type TApplicationStatus =
  (typeof applicationStatuses)[keyof typeof applicationStatuses];

export type TApprovalStatus =
  (typeof approvalStatuses)[keyof typeof approvalStatuses];

export type TNetworkType =
  (typeof networkTypes)[keyof typeof networkTypes];

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
  subtitle?: string;
  status: TApprovalStatus;
  date?: string;
  person: string;
}

export interface ITimelineStep {
  id?: string | number;
  step?: number;
  title?: string;
  subtitle?: string;
  time?: string;
  error?: string;
  info?: string;
  file?: boolean;
  button?: string;
  status: string;
  employee?: string;
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
  status: TApplicationStatus | ReactNode;
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
