import type { TCoordinates } from './coordinates';

export interface INearestStationInfo {
  name: string;
  km: number;
  pk: number;
  oqi_km: number;
  distanceKm: number;
}

export interface ISelectedPointKmInfo {
  km: number;
  pk: number;
  remainderMeters: number;
  formatted: string;
}

export interface IRailwayPointInfo {
  coordinates: TCoordinates;
  rawCoordinates?: TCoordinates | null;
  dmsString: string;
  distanceFromClickMeters: number;
  trackName?: string | null;
  gauge?: string | number | null;
  railwayRegion?: string | null;
  region?: string | null;
  district?: string | null;
  osmId?: number | null;
  topStation?: INearestStationInfo | null;
  bottomStation?: INearestStationInfo | null;
  pointKmInfo?: ISelectedPointKmInfo | null;
}
