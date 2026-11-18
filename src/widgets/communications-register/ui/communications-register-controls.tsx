import type { FC } from 'react';
import cn from 'classnames';
import { Button, Checkbox, Select, type CheckboxProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { FilterKeys } from '../model/constants/filter-keys';
import { Periods } from '../model/constants/periods';
import { getPeriodOptions } from '../model/lib/utils/get-period-options';
import type { TFilterKey } from '../model/types/filter';
import type { TPeriod } from '../model/types/period';

import { IconDownArrow, IconDownload, IconFromBracket, IconPlus } from '@shared/assets';
import type { THandleFilterChange, TTableFilterState } from '@shared/types';

import styles from './communications-register-controls.module.scss';

interface IProps {
  filters: TTableFilterState<TFilterKey>;
  onFilterChange: THandleFilterChange<TFilterKey>;
  className?: string;
}

const CommunicationsRegisterControls: FC<IProps> = ({
  filters,
  onFilterChange,
  className,
}) => {
  const { t } = useTranslation();
  const periodOptions = getPeriodOptions(t);

  const isNoTechSpec = Boolean(filters[FilterKeys.NO_TECHNICAL_SPECIFICATION]?.[0]);
  const currentPeriod = (filters[FilterKeys.PERIOD]?.[0] as TPeriod) || Periods.CURRENT_MONTH;

  const handleNoTechnicalSpecificationChange: CheckboxProps['onChange'] = (e) => {
    onFilterChange(
      FilterKeys.NO_TECHNICAL_SPECIFICATION,
      e.target.checked ? [true] : null,
    );
  };

  const handlePeriodChange = (value: TPeriod) => {
    onFilterChange(FilterKeys.PERIOD, [value]);
  };

  return (
    <div className={cn(styles['communications-register-controls'], className)}>
      <Checkbox
        className={cn(styles['communications-register-controls__checkbox'], 'form-checkbox')}
        checked={isNoTechSpec}
        onChange={handleNoTechnicalSpecificationChange}
      >
        {t('communicationsRegister.noTechnicalSpecification')}
      </Checkbox>
      <Select
        className={cn(styles['communications-register-controls__select'])}
        value={currentPeriod}
        onChange={handlePeriodChange}
        suffixIcon={<IconDownArrow />}
        options={periodOptions}
      />
      <Button
        className={cn(styles['communications-register-controls__action-btn'])}
        type='default'
        icon={<IconDownload />}
      >
        {t('actions.download')}
      </Button>
      <Button
        className={cn(styles['communications-register-controls__action-btn'])}
        type='default'
        icon={<IconFromBracket />}
      >
        {t('actions.import')}
      </Button>
      <Button
        className={cn(styles['communications-register-controls__create'])}
        type='primary'
        icon={<IconPlus />}
      >
        {t('communicationsRegister.create')}
      </Button>
    </div>
  );
};

export default CommunicationsRegisterControls;
