import type { FC } from 'react';
import { CircleMarker, Tooltip, useMap } from 'react-leaflet';

import { stationMarkerConfig } from '../model/config/markers';
import { stationClickZoom } from '../model/constants/zoom';
import type { IStationProperties } from '../model/types/station';
import type { ITrackProperties } from '../model/types/track';

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
    const targetZoom = Math.max(currentZoom, stationClickZoom);
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
      radius={stationMarkerConfig.defaultRadius}
      pathOptions={{
        className: styles['map__station-marker'],
        fillColor: stationMarkerConfig.fillColor,
        color: stationMarkerConfig.color,
        weight: stationMarkerConfig.weight,
        fillOpacity: stationMarkerConfig.fillOpacity,
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
