import type { LatLngBoundsExpression } from 'leaflet';
import type { TCoordinates } from './coordinates';

export interface IRegionOption {
  value: string;
  label: string;
  bounds?: LatLngBoundsExpression;
  center?: TCoordinates;
  zoom?: number;
}
