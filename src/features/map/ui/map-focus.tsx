import { useEffect, useRef, type FC } from 'react';
import { useMap } from 'react-leaflet';

import { FOCUS_POINT_ZOOM } from '../model/constants/zoom';
import { flyToCoords } from '../model/lib/utils/fly-to';
import { isValidCoords } from '../model/lib/utils/is-valid-coords';

interface IProps {
  coords: [number, number] | null;
}

const MapFocus: FC<IProps> = ({ coords }) => {
  const map = useMap();
  const prevCoordsRef = useRef<[number, number] | null>(null);

  useEffect(() => {
    if (!isValidCoords(coords)) {
      return;
    }

    const size = map.getSize();
    if (size.x === 0 || size.y === 0) {
      return;
    }

    const prev = prevCoordsRef.current;
    if (prev && prev[0] === coords[0] && prev[1] === coords[1]) {
      return;
    }

    prevCoordsRef.current = coords;
    flyToCoords(map, coords, FOCUS_POINT_ZOOM, 1);
  }, [coords, map]);

  return null;
};

export default MapFocus;
