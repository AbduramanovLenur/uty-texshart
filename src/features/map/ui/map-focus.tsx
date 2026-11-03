import { useEffect, useRef, type FC } from 'react';
import { useMap } from 'react-leaflet';

import { FOCUS_POINT_ZOOM } from '../model/constants';

interface IProps {
  coords: [number, number] | null;
}

const MapFocus: FC<IProps> = ({ coords }) => {
  const map = useMap();
  const prevCoordsRef = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (
      !coords ||
      !Array.isArray(coords) ||
      typeof coords[0] !== 'number' ||
      typeof coords[1] !== 'number' ||
      Number.isNaN(coords[0]) ||
      Number.isNaN(coords[1])
    ) {
      return;
    }

    const size = map.getSize();
    if (size.x === 0 || size.y === 0) {
      return;
    }

    const prev = prevCoordsRef.current;
    const isSame = prev && prev[0] === coords[0] && prev[1] === coords[1];

    if (!isSame) {
      prevCoordsRef.current = coords;
      const targetZoom = Math.max(map.getZoom(), FOCUS_POINT_ZOOM);
      map.flyTo(coords, targetZoom, { duration: 1 });
    }
  }, [coords, map]);

  return null;
};

export default MapFocus;
