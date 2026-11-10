import { stationsData, railwayTracksData } from '../../data';

const latToMeters = 111139;

function getClosestPointOnSegment(
  point: [number, number],
  a: [number, number],
  b: [number, number],
  lngToMeters: number,
): { closest: [number, number]; distanceSq: number } {
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

export function snapToNearestRailway(
  coords: [number, number],
): [number, number] {
  const [lat, lng] = coords;

  const radLat = (lat * Math.PI) / 180;
  const lngToMeters = latToMeters * Math.cos(radLat);

  let minDistanceSq = Number.POSITIVE_INFINITY;
  let nearestCoords: [number, number] = coords;

  for (const station of stationsData.features) {
    const [stLng, stLat] = station.geometry.coordinates;
    const dx = (lng - stLng) * lngToMeters;
    const dy = (lat - stLat) * latToMeters;
    const distSq = dx * dx + dy * dy;

    if (distSq < minDistanceSq) {
      minDistanceSq = distSq;
      nearestCoords = [stLat, stLng];
    }
  }

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
        }
      }
    }
  }

  return nearestCoords;
}
