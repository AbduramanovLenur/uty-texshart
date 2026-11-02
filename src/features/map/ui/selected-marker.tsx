import type { FC } from 'react';
import { CircleMarker, useMap } from 'react-leaflet';

import {
  SELECTED_MARKER_CONFIG,
  FOCUS_POINT_ZOOM,
} from '../model/constants';

import styles from './map.module.scss';

interface IProps {
  position: [number, number];
}

const SelectedMarker: FC<IProps> = ({ position }) => {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(position, Math.max(map.getZoom(), FOCUS_POINT_ZOOM), {
      duration: 1,
    });
  };

  return (
    <CircleMarker
      center={position}
      radius={SELECTED_MARKER_CONFIG.radius}
      pathOptions={{
        className: styles['map__selected-marker'],
        fillColor: SELECTED_MARKER_CONFIG.fillColor,
        color: SELECTED_MARKER_CONFIG.color,
        weight: SELECTED_MARKER_CONFIG.weight,
        fillOpacity: SELECTED_MARKER_CONFIG.fillOpacity,
      }}
      eventHandlers={{
        click: handleClick,
      }}
    />
  );
};

export default SelectedMarker;
