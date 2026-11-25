import type { TCoordinates } from '../../types/coordinates';

export const getCoordsKey = (coords?: TCoordinates | null): string =>
  coords ? `${coords[0]},${coords[1]}` : '';
