import type { MapLayerFilterKey } from '../constants/map-layer-filter-key';

export type TMapLayerFilterKey = (typeof MapLayerFilterKey)[keyof typeof MapLayerFilterKey];

export type IMapLayerFilters = Record<TMapLayerFilterKey, boolean>;

export interface IMapLayerFilterOption {
  key: TMapLayerFilterKey;
  label: string;
}
