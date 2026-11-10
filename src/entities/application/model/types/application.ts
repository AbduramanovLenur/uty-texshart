import type { TStatus } from '@shared/types';

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
