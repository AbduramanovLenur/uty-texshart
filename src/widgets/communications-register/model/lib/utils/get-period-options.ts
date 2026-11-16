import type { DefaultOptionType } from 'antd/es/select';
import type { TFunction } from 'i18next';

import { Periods } from '../../constants/periods';

export const getPeriodOptions = (t: TFunction): DefaultOptionType[] => [
  {
    value: Periods.TODAY,
    label: t('communicationsRegister.today'),
  },
  {
    value: Periods.CURRENT_WEEK,
    label: t('communicationsRegister.currentWeek'),
  },
  {
    value: Periods.CURRENT_MONTH,
    label: t('communicationsRegister.currentMonth'),
  },
  {
    value: Periods.CURRENT_YEAR,
    label: t('communicationsRegister.currentYear'),
  },
];
