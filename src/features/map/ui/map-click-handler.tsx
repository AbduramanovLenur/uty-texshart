import type { FC } from 'react';
import { useMapEvents } from 'react-leaflet';
import type { LeafletMouseEvent } from 'leaflet';

import { snapToNearestRailway } from '../model/railway-proximity';

interface IProps {
  onSelectPoint?: (coords: [number, number]) => void;
  readOnly?: boolean;
}

const MapClickHandler: FC<IProps> = ({ onSelectPoint, readOnly = false }) => {
  useMapEvents({
    click(event: LeafletMouseEvent) {
      if (readOnly || !onSelectPoint) {
        return;
      }

      const rawCoords: [number, number] = [
        event.latlng.lat,
        event.latlng.lng,
      ];
      const snappedCoords = snapToNearestRailway(rawCoords);

      onSelectPoint(snappedCoords);
    },
  });

  return null;
};

export default MapClickHandler;
