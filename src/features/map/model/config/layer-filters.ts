import { MapLayerFilterKey } from '../constants/map-layer-filter-key';
import type { IMapLayerFilters } from '../types/layer-filters';

export const defaultMapLayerFilters: IMapLayerFilters = {
  [MapLayerFilterKey.RAILWAY_REGIONS]: true,
  [MapLayerFilterKey.REGIONS]: false,
  [MapLayerFilterKey.STATIONS]: true,
};
