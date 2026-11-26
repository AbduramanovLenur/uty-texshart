import { useEffect, type FC } from 'react';
import { useMap } from 'react-leaflet';

import { mapMaxZoom } from '../model/config/map';

const MapResizeHandler: FC = () => {
  const map = useMap();

  useEffect(() => {
    map.setMaxZoom(mapMaxZoom);

    const invalidate = () => map.invalidateSize();

    invalidate();

    const container = map.getContainer();
    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(invalidate);

    if (observer && container) {
      observer.observe(container);
    }

    const timer = setTimeout(invalidate, 200);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [map]);

  return null;
};

export default MapResizeHandler;
