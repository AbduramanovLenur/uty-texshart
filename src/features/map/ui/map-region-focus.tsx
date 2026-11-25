import { useEffect, useRef, type FC } from 'react';
import { useMap } from 'react-leaflet';

import { getMapView } from '../model/lib/utils/get-map-view';
import type { IMapViewOptions } from '../model/types/map-view';

const FLY_DURATION = 1;

interface IProps extends IMapViewOptions {
  selectedRegion?: string;
}

const MapRegionFocus: FC<IProps> = ({ bounds, center, zoom, selectedRegion }) => {
  const map = useMap();
  const prevRegionRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (prevRegionRef.current === selectedRegion) {
      return;
    }

    const size = map.getSize();
    if (size.x === 0 || size.y === 0) {
      return;
    }

    prevRegionRef.current = selectedRegion;

    const view = getMapView(map, { bounds, center, zoom });
    map.flyTo(view.center, view.zoom, { duration: FLY_DURATION });
  }, [bounds, center, zoom, selectedRegion, map]);

  return null;
};

export default MapRegionFocus;
