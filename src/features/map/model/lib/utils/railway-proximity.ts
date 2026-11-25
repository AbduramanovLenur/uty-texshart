import { railwayTracksData } from '../../data';
import type { ITrackProperties } from '../../types/track';
import type { IClosestSegmentPoint, ISnapResult } from '../../types/snap';
import type { TCoordinates } from '../../types/coordinates';

const latToMeters = 111139;

export function getClosestPointOnSegment(
  point: TCoordinates,
  a: TCoordinates,
  b: TCoordinates,
  lngToMeters: number,
): IClosestSegmentPoint {
  const [pLat, pLng] = point;
  const [aLat, aLng] = a;
  const [bLat, bLng] = b;

  const px = (pLng - aLng) * lngToMeters;
  const py = (pLat - aLat) * latToMeters;
  const bx = (bLng - aLng) * lngToMeters;
  const by = (bLat - aLat) * latToMeters;

  const l2 = bx * bx + by * by;

  if (l2 === 0) {
    return {
      closest: [aLat, aLng],
      distanceSq: px * px + py * py,
    };
  }

  let t = (px * bx + py * by) / l2;
  t = Math.max(0, Math.min(1, t));

  const closestLat = aLat + t * (bLat - aLat);
  const closestLng = aLng + t * (bLng - aLng);

  const dx = px - t * bx;
  const dy = py - t * by;

  return {
    closest: [closestLat, closestLng],
    distanceSq: dx * dx + dy * dy,
  };
}

export function findNearestRailwaySnap(coords: TCoordinates): ISnapResult {
  const [lat] = coords;
  const radLat = (lat * Math.PI) / 180;
  const lngToMeters = latToMeters * Math.cos(radLat);

  let minDistanceSq = Number.POSITIVE_INFINITY;
  let nearestCoords: TCoordinates = coords;
  let nearestTrack: ITrackProperties | null = null;

  for (const track of railwayTracksData.features) {
    const multiLine = track.geometry.coordinates;

    for (const line of multiLine) {
      for (let i = 0; i < line.length - 1; i++) {
        const p1 = line[i];
        const p2 = line[i + 1];

        const { closest, distanceSq } = getClosestPointOnSegment(
          coords,
          [p1[1], p1[0]],
          [p2[1], p2[0]],
          lngToMeters,
        );

        if (distanceSq < minDistanceSq) {
          minDistanceSq = distanceSq;
          nearestCoords = closest;
          nearestTrack = (track.properties || {}) as ITrackProperties;
        }
      }
    }
  }

  const distanceMeters = Math.round(
    Number.isFinite(minDistanceSq) ? Math.sqrt(minDistanceSq) : 0,
  );

  return {
    snappedCoords: nearestCoords,
    distanceMeters,
    nearestTrack,
  };
}

export function snapToNearestRailway(coords: TCoordinates): TCoordinates {
  return findNearestRailwaySnap(coords).snappedCoords;
}
