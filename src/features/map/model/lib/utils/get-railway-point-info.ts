import type { IStationWithKm } from '../../types/station';
import type { INearestStationInfo, IRailwayPointInfo, ISelectedPointKmInfo } from '../../types/point-info';
import type { TCoordinates } from '../../types/coordinates';
import { findNearestRailwaySnap } from './railway-proximity';
import { formatDms } from './format-dms';

function getDistanceMeters(
  [lat1, lon1]: TCoordinates,
  [lat2, lon2]: TCoordinates,
): number {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatHudud(hudud?: string | null): string | null {
  if (!hudud) return null;

  const trimmed = hudud.trim();
  const formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);

  return trimmed.toLowerCase().includes('hudud')
    ? formatted
    : `${formatted} hududi`;
}

function toStationInfo(
  station: IStationWithKm & { distMeters: number },
): INearestStationInfo {
  return {
    name: station.props.nomi || station.props.nomi_ru || '',
    km: station.props.km ?? Math.floor(station.oqi_km),
    pk: station.props.pk ?? Math.round((station.oqi_km % 1) * 10),
    oqi_km: station.oqi_km,
    distanceKm: Number((station.distMeters / 1000).toFixed(2)),
  };
}

function getPointKmInfo(
  higher: IStationWithKm & { distMeters: number },
  lower: IStationWithKm & { distMeters: number },
): ISelectedPointKmInfo {
  const dHigherKm = higher.distMeters / 1000;
  const dLowerKm = lower.distMeters / 1000;
  const totalDist = dHigherKm + dLowerKm;

  const kmSpan = higher.oqi_km - lower.oqi_km;
  const ratio = totalDist > 0 ? dLowerKm / totalDist : 0.5;
  const calculatedKm = lower.oqi_km + kmSpan * ratio;

  const baseKm = Math.floor(calculatedKm);
  const remainingMeters = (calculatedKm - baseKm) * 1000;
  const picket = Math.floor(remainingMeters / 100);
  const remainderM = Math.round(remainingMeters % 100);

  return {
    km: baseKm,
    pk: picket,
    remainderMeters: remainderM,
    formatted: `≈ ${baseKm} km ${picket} pk + ${remainderM} m`,
  };
}

export function getRailwayPointInfo(
  coords: TCoordinates,
  stations: IStationWithKm[],
  rawCoords?: TCoordinates | null,
): IRailwayPointInfo {
  const { snappedCoords, nearestTrack } = findNearestRailwaySnap(coords);
  const clickPoint = rawCoords || coords;

  const nearestStations = stations
    .map((station) => ({
      ...station,
      distMeters: getDistanceMeters(snappedCoords, [station.lat, station.lng]),
    }))
    .sort((a, b) => a.distMeters - b.distMeters);

  let topStation: INearestStationInfo | null = null;
  let bottomStation: INearestStationInfo | null = null;
  let pointKmInfo: ISelectedPointKmInfo | null = null;

  const nearest = nearestStations[0];

  if (nearest) {
    const secondNearest =
      nearest.oqi_km > 0
        ? nearestStations.find((s) => s.oqi_km !== nearest.oqi_km)
        : undefined;

    if (secondNearest) {
      const isNearestHigher = nearest.oqi_km > secondNearest.oqi_km;
      const higher = isNearestHigher ? nearest : secondNearest;
      const lower = isNearestHigher ? secondNearest : nearest;

      topStation = toStationInfo(higher);
      bottomStation = toStationInfo(lower);
      pointKmInfo = getPointKmInfo(higher, lower);
    } else {
      topStation = toStationInfo(nearest);
    }
  }

  return {
    coordinates: coords,
    rawCoordinates: clickPoint,
    dmsString: formatDms(coords),
    distanceFromClickMeters: Math.round(
      getDistanceMeters(clickPoint, snappedCoords),
    ),
    trackName: nearestTrack?.nomi || null,
    gauge: nearestTrack?.izi_mm || 1520,
    railwayRegion: formatHudud(nearestTrack?.hudud),
    region: nearestTrack?.viloyat || null,
    district: nearestTrack?.tuman || null,
    osmId: nearestTrack?.osm_id || null,
    topStation,
    bottomStation,
    pointKmInfo,
  };
}
