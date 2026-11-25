import type { FC } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IRegionOption } from '../model/types/region-option';
import { IconDownArrow } from '@shared/assets';

import styles from './map-region-select.module.scss';

interface IProps {
  value?: string;
  onChange?: (value?: string) => void;
  options?: IRegionOption[];
  className?: string;
  disabled?: boolean;
}

const MapRegionSelect: FC<IProps> = ({
  value,
  onChange,
  options = [],
  className,
  disabled = false,
}) => {
  const { t } = useTranslation();

  const selectOptions = [
    { value: '', label: t('map.allRegions') },
    ...options.map((opt) => ({
      value: opt.value,
      label: opt.label,
    })),
  ];

  const handleChange = (selectedValue?: string) => {
    onChange?.(selectedValue);
  };

  return (
    <Select
      className={cn(styles['map-region-select'], className)}
      value={value}
      onChange={handleChange}
      placeholder={t('map.allRegions')}
      options={selectOptions}
      suffixIcon={<IconDownArrow />}
      allowClear
      size='large'
      disabled={disabled}
    />
  );
};

export default MapRegionSelect;
