import type { ReactNode } from 'react';
import type { applicationStatuses } from './application-statuses';

export type TApplicationStatus =
  (typeof applicationStatuses)[keyof typeof applicationStatuses];

export interface IApplicationPreview {
  id: number;
  code: string;
  type: 'oil_pipeline' | 'power_line' | 'fiber_optic' | 'gas_pipeline' | 'sewage_pipeline';
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}

export interface ITimelineStep {
  step?: number;
  title?: string;
  time?: string;
  error?: string;
  comment?: string;
  file?: boolean;
  button?: string;
  status: string;
  employee?: string;
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
