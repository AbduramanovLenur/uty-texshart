import type { TFunction } from 'i18next';

import { MapTileType } from '../../constants/map-tile-type';
import type { IMapTileOption } from '../../types/map-tile-option';

export const getMapTileOptions = (t: TFunction): IMapTileOption[] => [
  { label: t('map.street'), value: MapTileType.STREET },
  { label: t('map.schema'), value: MapTileType.SCHEMA },
  { label: t('map.satellite'), value: MapTileType.SATELLITE },
];
