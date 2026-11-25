import type { FC } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IMapLayerFilters, TMapLayerFilterKey } from '../model/types/layer-filters';
import { defaultMapLayerFilters } from '../model/config/layer-filters';
import { getMapLayerFilterOptions } from '../model/lib/utils/get-map-layer-filter-options';

import styles from './map-layer-filters.module.scss';

interface IProps {
  value?: IMapLayerFilters;
  onChange?: (filters: IMapLayerFilters) => void;
  className?: string;
  disabled?: boolean;
}

const MapLayerFilters: FC<IProps> = ({
  value = defaultMapLayerFilters,
  onChange,
  className,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const filterOptions = getMapLayerFilterOptions(t);

  const handleToggle = (key: TMapLayerFilterKey) => (e: CheckboxChangeEvent) => {
    onChange?.({
      ...value,
      [key]: e.target.checked,
    });
  };

  return (
    <div className={cn(styles['map-layer-filters'], className)}>
      {filterOptions.map(({ key, label }) => (
        <Checkbox
          key={key}
          className={cn(styles['map-layer-filters__item'], 'form-checkbox')}
          checked={value[key]}
          onChange={handleToggle(key)}
          disabled={disabled}
        >
          {label}
        </Checkbox>
      ))}
    </div>
  );
};

export default MapLayerFilters;
