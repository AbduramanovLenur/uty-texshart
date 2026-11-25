export const isValidCoords = (
  coords: unknown,
): coords is [number, number] => {
  return (
    Array.isArray(coords) &&
    coords.length === 2 &&
    coords.every((coord) => typeof coord === 'number' && Number.isFinite(coord))
  );
};
