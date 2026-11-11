export type CertificateType = 'legalEntity' | 'individual';

export type CertificateOption = {
  value: string;
  label: string;
  director?: string;
  pinfl: string;
  type: CertificateType;
  certificate?: string;
  validityPeriod: string;
  disabled?: boolean;
};
