import type { FC } from 'react';
import { useMapEvents } from 'react-leaflet';
import type { LeafletMouseEvent } from 'leaflet';

import { TRACK_CLICK_ZOOM } from '../model/constants/zoom';
import { flyToCoords } from '../model/lib/utils/fly-to';
import { snapToNearestRailway } from '../model/lib/utils/railway-proximity';

interface IProps {
  onSelectPoint?: (coords: [number, number], rawCoords?: [number, number]) => void;
  readOnly?: boolean;
}

const MapClickHandler: FC<IProps> = ({ onSelectPoint, readOnly = false }) => {
  const map = useMapEvents({
    click({ latlng }: LeafletMouseEvent) {
      if (readOnly || !onSelectPoint) {
        return;
      }

      const rawCoords: [number, number] = [latlng.lat, latlng.lng];
      const snappedCoords = snapToNearestRailway(rawCoords);

      onSelectPoint(snappedCoords, rawCoords);
      flyToCoords(map, snappedCoords, TRACK_CLICK_ZOOM, 0.8);
    },
  });

  return null;
};

export default MapClickHandler;
