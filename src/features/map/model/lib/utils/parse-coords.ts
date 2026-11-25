import { COORDINATES_PATTERN } from '../../constants/coordinates';
import type { TCoordinates } from '../../types/coordinates';

export const parseCoords = (value: string): TCoordinates | null => {
  const match = value.match(COORDINATES_PATTERN);
  if (!match) {
    return null;
  }

  const lat = parseFloat(match[1]);
  const lng = parseFloat(match[2]);

  if (
    Number.isNaN(lat) ||
    Number.isNaN(lng) ||
    lat < -90 ||
    lat > 90 ||
    lng < -180 ||
    lng > 180
  ) {
    return null;
  }

  return [lat, lng];
};
