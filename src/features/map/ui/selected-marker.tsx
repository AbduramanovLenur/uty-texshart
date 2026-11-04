import type { FC } from 'react';
import { CircleMarker, useMap } from 'react-leaflet';

import {
  selectedMarkerConfig,
  focusPointZoom,
} from '../model/constants';

import styles from './map.module.scss';

interface IProps {
  position: [number, number];
}

const SelectedMarker: FC<IProps> = ({ position }) => {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(position, Math.max(map.getZoom(), focusPointZoom), {
      duration: 1,
    });
  };

  return (
    <CircleMarker
      center={position}
      radius={selectedMarkerConfig.radius}
      pathOptions={{
        className: styles['map__selected-marker'],
        fillColor: selectedMarkerConfig.fillColor,
        color: selectedMarkerConfig.color,
        weight: selectedMarkerConfig.weight,
        fillOpacity: selectedMarkerConfig.fillOpacity,
      }}
      eventHandlers={{
        click: handleClick,
      }}
    />
  );
};

export default SelectedMarker;
