import type { TFunction } from 'i18next';

import { MapLayerFilterKey } from '../../constants/map-layer-filter-key';
import type { IMapLayerFilterOption } from '../../types/layer-filters';

export const getMapLayerFilterOptions = (t: TFunction): IMapLayerFilterOption[] => [
  { key: MapLayerFilterKey.RAILWAY_REGIONS, label: t('map.railwayRegions', { count: 6 }) },
  { key: MapLayerFilterKey.REGIONS, label: t('map.regions', { count: 14 }) },
  { key: MapLayerFilterKey.STATIONS, label: t('map.stationsAndStops') },
];
