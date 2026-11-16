import type { FC } from 'react';
import cn from 'classnames';
import { Button, Checkbox, Select } from 'antd';
import { useTranslation } from 'react-i18next';

import { Periods } from '../model/constants/periods';
import { getPeriodOptions } from '../model/lib/utils/get-period-options';

import { IconDownArrow, IconDownload, IconFromBracket, IconPlus } from '@shared/assets';

import styles from './communications-register-controls.module.scss';

interface IProps {
  className?: string;
}

const CommunicationsRegisterControls: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const periodOptions = getPeriodOptions(t);

  return (
    <div className={cn(styles['communications-register-controls'], className)}>
      <Checkbox className={cn(styles['communications-register-controls__checkbox'])}>
        {t('communicationsRegister.noTechnicalSpecification')}
      </Checkbox>
      <Select
        className={cn(styles['communications-register-controls__select'])}
        defaultValue={Periods.CURRENT_MONTH}
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
