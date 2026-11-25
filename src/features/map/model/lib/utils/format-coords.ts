import type { TCoordinates } from '../../types/coordinates';

export const formatCoords = ([lat, lng]: TCoordinates): string =>
  `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
