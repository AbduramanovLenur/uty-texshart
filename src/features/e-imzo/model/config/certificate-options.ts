import type { CertificateOption } from '../types/certificate-option';

export const certificateOptions: CertificateOption[] = [
  {
    value: '0',
    label: 'Tech Innovations LLC',
    director: 'Khamidov R.',
    pinfl: '321 654 987 012',
    type: 'legalEntity',
    certificate: 'EF32165498700',
    validityPeriod: '30.12.2025',
  },
  {
    value: '1',
    label: 'Future Solutions LLC',
    director: 'Saidov B.',
    pinfl: '123 456 789 012',
    type: 'legalEntity',
    certificate: 'CD98765432100',
    validityPeriod: '30.12.2025',
    disabled: true,
  },
  {
    value: '2',
    label: 'Global Trade LLC',
    director: 'Khamidov R.',
    pinfl: '321 654 987 012',
    type: 'legalEntity',
    certificate: 'EF32165498700',
    validityPeriod: '30.12.2025',
  },
  {
    value: '3',
    label: 'Jumayev T.',
    pinfl: '1234 5678 9012 3456 78',
    type: 'individual',
    validityPeriod: '30.12.2025',
  },
];
