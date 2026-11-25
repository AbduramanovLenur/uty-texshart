export const getCoordsKey = (coords?: [number, number] | null): string =>
  coords ? `${coords[0]},${coords[1]}` : '';
