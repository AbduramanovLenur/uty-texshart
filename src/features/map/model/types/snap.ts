import type { ITrackProperties } from './track';
import type { TCoordinates } from './coordinates';

export interface IClosestSegmentPoint {
  closest: TCoordinates;
  distanceSq: number;
}

export interface ISnapResult {
  snappedCoords: TCoordinates;
  distanceMeters: number;
  nearestTrack: ITrackProperties | null;
}
