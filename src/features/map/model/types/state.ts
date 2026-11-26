import type { TMapTileType } from './map-type';
import type { IMapLayerFilters } from './layer-filters';

export interface IState {
  tileType: TMapTileType;
  selectedRegion?: string;
  layerFilters: IMapLayerFilters;
}
