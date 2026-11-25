import {
  LatLngBounds,
  latLngBounds,
  type Map as LeafletMap,
} from 'leaflet';

import { mapDefaultCenter, mapDefaultZoom, mapMaxZoom } from '../../config/map';
import type { IMapView, IMapViewOptions } from '../../types/map-view';

const BOUNDS_ZOOM_OFFSET = 1;

export const getMapView = (map: LeafletMap, { bounds, center, zoom }: IMapViewOptions): IMapView => {
  if (!bounds) {
    return center
      ? { center, zoom: zoom ?? map.getZoom() }
      : { center: mapDefaultCenter, zoom: mapDefaultZoom };
  }

  const area = bounds instanceof LatLngBounds ? bounds : latLngBounds(bounds);
  const areaCenter = area.getCenter();

  return {
    center: center ?? [areaCenter.lat, areaCenter.lng],
    zoom: zoom ?? Math.min(map.getBoundsZoom(area) + BOUNDS_ZOOM_OFFSET, mapMaxZoom),
  };
};
