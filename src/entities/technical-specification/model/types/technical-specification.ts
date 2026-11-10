import type { TStatus } from '@shared/types';

export interface ITechnicalSpecification {
  key: string;
  id: string;
  applicationId: string;
  applicant: string;
  status: TStatus;
  validUntil: string;
  signedAt: string;
}
