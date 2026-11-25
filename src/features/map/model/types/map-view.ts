import type { LatLngBoundsExpression } from 'leaflet';

export interface IMapView {
  center: [number, number];
  zoom: number;
}

export interface IMapViewOptions {
  bounds?: LatLngBoundsExpression | null;
  center?: [number, number];
  zoom?: number;
}
