import type { ITrackProperties } from './track';

export interface IClosestSegmentPoint {
  closest: [number, number];
  distanceSq: number;
}

export interface ISnapResult {
  snappedCoords: [number, number];
  distanceMeters: number;
  nearestTrack: ITrackProperties | null;
}
