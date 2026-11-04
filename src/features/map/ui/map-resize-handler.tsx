import { useEffect, type FC } from 'react';
import { useMap } from 'react-leaflet';

const MapResizeHandler: FC = () => {
  const map = useMap();

  useEffect(() => {
    const triggerInvalidate = () => {
      map.invalidateSize();
    };

    triggerInvalidate();

    const container = map.getContainer();
    let observer: ResizeObserver | null = null;

    if (typeof ResizeObserver !== 'undefined' && container) {
      observer = new ResizeObserver(() => {
        triggerInvalidate();
      });
      observer.observe(container);
    }

    const timer = setTimeout(triggerInvalidate, 200);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [map]);

  return null;
};

export default MapResizeHandler;
