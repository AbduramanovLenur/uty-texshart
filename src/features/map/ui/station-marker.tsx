import type { FC } from 'react';
import { CircleMarker, useMap } from 'react-leaflet';

import { stationMarkerConfig } from '../model/config/markers';
import { STATION_CLICK_ZOOM } from '../model/constants/zoom';
import { flyToCoords } from '../model/lib/utils/fly-to';

import styles from './map.module.scss';

const stationPathOptions = {
  className: styles['map__station-marker'],
  fillColor: stationMarkerConfig.fillColor,
  color: stationMarkerConfig.color,
  weight: stationMarkerConfig.weight,
  fillOpacity: stationMarkerConfig.fillOpacity,
};

interface IProps {
  position: [number, number];
  onSelectPoint?: (coords: [number, number]) => void;
  readOnly?: boolean;
}

const StationMarker: FC<IProps> = ({
  position,
  onSelectPoint,
  readOnly = false,
}) => {
  const map = useMap();

  const handleClick = () => {
    if (!readOnly && onSelectPoint) {
      onSelectPoint(position);
    }

    flyToCoords(map, position, STATION_CLICK_ZOOM, 1);
  };

  return (
    <CircleMarker
      center={position}
      radius={stationMarkerConfig.defaultRadius}
      pathOptions={stationPathOptions}
      eventHandlers={{ click: handleClick }}
    />
  );
};

export default StationMarker;
