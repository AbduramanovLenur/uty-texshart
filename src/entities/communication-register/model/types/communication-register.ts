import type { TStatus } from '@shared/types';

export interface ICommunicationRegister {
  key: string;
  id: string;
  mtu: string;
  km: string;
  applicant: string;
  network: string;
  status: TStatus;
  date: string;
  updatedAt: string;
  hasTechnicalSpecification: boolean;
}
