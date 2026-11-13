import type { TFunction } from 'i18next';

import { MtuAndCompaniesTypes } from '../../constants/mtu-and-companies-types';

export const getMtuAndCompaniesTypeOptions = (t: TFunction) => [
  {
    label: t('mtuAndCompanies.tabs.mtu'),
    value: MtuAndCompaniesTypes.MTU,
  },
  {
    label: t('mtuAndCompanies.tabs.companies'),
    value: MtuAndCompaniesTypes.COMPANIES,
  },
];
