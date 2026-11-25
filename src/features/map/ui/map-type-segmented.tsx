import type { FC } from 'react';
import { Segmented } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { MapTileType } from '../model/constants/map-tile-type';
import type { TMapTileType } from '../model/types/map-type';
import { getMapTileOptions } from '../model/lib/utils/get-map-tile-options';

import styles from './map-type-segmented.module.scss';

interface IProps {
  value?: TMapTileType;
  onChange?: (value: TMapTileType) => void;
  className?: string;
  disabled?: boolean;
}

const MapTypeSegmented: FC<IProps> = ({
  value = MapTileType.STREET,
  onChange,
  className,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const options = getMapTileOptions(t);

  return (
    <Segmented<TMapTileType>
      className={cn(styles['map-type-segmented'], className)}
      block
      options={options}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default MapTypeSegmented;
