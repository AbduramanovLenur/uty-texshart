import type { Map as LeafletMap } from 'leaflet';
import type { TCoordinates } from '../../types/coordinates';

export function flyToCoords(
  map: LeafletMap,
  coords: TCoordinates,
  minZoom: number,
  duration: number,
): void {
  map.flyTo(coords, Math.max(map.getZoom(), minZoom), { duration });
}
