import type { FC } from 'react';
import { CircleMarker, useMap } from 'react-leaflet';
import cn from 'classnames';

import { selectedMarkerConfig } from '../model/config/markers';
import { FOCUS_POINT_ZOOM } from '../model/constants/zoom';

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
      radius={selectedMarkerConfig.radius}
      pathOptions={{
        className: cn(styles['map__selected-marker']),
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
