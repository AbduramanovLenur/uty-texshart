export const isValidCoords = (
  coords: unknown,
): coords is [number, number] => {
  return (
    Array.isArray(coords) &&
    coords.length === 2 &&
    typeof coords[0] === 'number' &&
    typeof coords[1] === 'number' &&
    !Number.isNaN(coords[0]) &&
    !Number.isNaN(coords[1])
  );
};
