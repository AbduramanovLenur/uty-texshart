import type { LatLngBoundsExpression } from 'leaflet';
import type { TCoordinates } from './coordinates';

export interface IMapView {
  center: TCoordinates;
  zoom: number;
}

export interface IMapViewOptions {
  bounds?: LatLngBoundsExpression | null;
  center?: TCoordinates;
  zoom?: number;
}
