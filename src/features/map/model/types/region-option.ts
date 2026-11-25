import type { LatLngBoundsExpression } from 'leaflet';

export interface IRegionOption {
  value: string;
  label: string;
  bounds?: LatLngBoundsExpression;
  center?: [number, number];
  zoom?: number;
}
