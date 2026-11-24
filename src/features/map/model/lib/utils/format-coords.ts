export const formatCoords = ([lat, lng]: [number, number]): string =>
  `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
