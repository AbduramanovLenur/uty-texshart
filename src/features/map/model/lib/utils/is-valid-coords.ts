import type { TCoordinates } from '../../types/coordinates';

export const isValidCoords = (
  coords: unknown,
): coords is TCoordinates => {
  return (
    Array.isArray(coords) &&
    coords.length === 2 &&
    coords.every((coord) => typeof coord === 'number' && Number.isFinite(coord))
  );
};
