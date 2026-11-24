import type { Map as LeafletMap } from 'leaflet';

export function flyToCoords(
  map: LeafletMap,
  coords: [number, number],
  minZoom: number,
  duration: number,
): void {
  map.flyTo(coords, Math.max(map.getZoom(), minZoom), { duration });
}
