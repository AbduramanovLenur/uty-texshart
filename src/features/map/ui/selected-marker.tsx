import type { FC } from 'react';
import { Marker, CircleMarker, useMap } from 'react-leaflet';
import L from 'leaflet';

import {
  selectedPinMarkerConfig,
  selectedPointTrackDotConfig,
} from '../model/config/markers';
import { FOCUS_POINT_ZOOM } from '../model/constants/zoom';
import { flyToCoords } from '../model/lib/utils/fly-to';

const customPinIcon = L.icon({
  iconUrl: selectedPinMarkerConfig.iconUrl,
  iconSize: selectedPinMarkerConfig.iconSize,
  iconAnchor: selectedPinMarkerConfig.iconAnchor,
  popupAnchor: selectedPinMarkerConfig.popupAnchor,
});

const trackDotPathOptions = {
  fillColor: selectedPointTrackDotConfig.fillColor,
  color: selectedPointTrackDotConfig.color,
  weight: selectedPointTrackDotConfig.weight,
  fillOpacity: selectedPointTrackDotConfig.fillOpacity,
};

interface IProps {
  position: [number, number];
}

const SelectedMarker: FC<IProps> = ({ position }) => {
  const map = useMap();

  const handleClick = () => {
    flyToCoords(map, position, FOCUS_POINT_ZOOM, 0.8);
  };

  return (
    <>
      <Marker
        position={position}
        icon={customPinIcon}
        eventHandlers={{ click: handleClick }}
      />
      <CircleMarker
        center={position}
        radius={selectedPointTrackDotConfig.radius}
        pathOptions={trackDotPathOptions}
        eventHandlers={{ click: handleClick }}
      />
    </>
  );
};

export default SelectedMarker;
