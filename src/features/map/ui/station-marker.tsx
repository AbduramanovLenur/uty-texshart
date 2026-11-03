import type { FC } from 'react';
import { CircleMarker, Tooltip, useMap } from 'react-leaflet';

import type { IStationProperties, ITrackProperties } from '../model/types';
import {
  STATION_MARKER_CONFIG,
  STATION_CLICK_ZOOM,
} from '../model/constants';

import TrackPopup from './track-popup';
import styles from './map.module.scss';

interface IProps {
  position: [number, number];
  properties?: IStationProperties;
  onSelectPoint?: (coords: [number, number]) => void;
  readOnly?: boolean;
}

const StationMarker: FC<IProps> = ({
  position,
  properties,
  onSelectPoint,
  readOnly = false,
}) => {
  const map = useMap();

  const handleClick = () => {
    if (!readOnly && onSelectPoint) {
      onSelectPoint(position);
    }

    const currentZoom = map.getZoom();
    const targetZoom = Math.max(currentZoom, STATION_CLICK_ZOOM);
    map.flyTo(position, targetZoom, { duration: 1 });
  };

  const trackProps: ITrackProperties = {
    nomi: properties?.nomi || properties?.nomi_ru || 'Станция',
    turi: properties?.turi || 'Станция',
    viloyat: properties?.viloyat,
    tuman: properties?.hudud,
  };

  return (
    <CircleMarker
      center={position}
      radius={STATION_MARKER_CONFIG.defaultRadius}
      pathOptions={{
        className: styles['map__station-marker'],
        fillColor: STATION_MARKER_CONFIG.fillColor,
        color: STATION_MARKER_CONFIG.color,
        weight: STATION_MARKER_CONFIG.weight,
        fillOpacity: STATION_MARKER_CONFIG.fillOpacity,
      }}
      eventHandlers={{
        click: handleClick,
      }}
    >
      <Tooltip direction='top' offset={[0, -8]} opacity={1}>
        <TrackPopup
          properties={trackProps}
          coordinates={position}
        />
      </Tooltip>
    </CircleMarker>
  );
};

export default StationMarker;
