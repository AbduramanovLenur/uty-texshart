import type { FC } from 'react';

import { stationsData } from '../model/data';

import StationMarker from './station-marker';

interface IProps {
  onSelectPoint?: (coords: [number, number]) => void;
  readOnly?: boolean;
}

const stationMarkers = stationsData.features.map((feature, index) => {
  const [lng, lat] = feature.geometry.coordinates;

  return {
    key: `${feature.properties.esr || 'station'}-${index}`,
    position: [lat, lng] as [number, number],
  };
});

const StationsLayer: FC<IProps> = ({ onSelectPoint, readOnly = false }) => (
  <>
    {stationMarkers.map(({ key, position }) => (
      <StationMarker
        key={key}
        position={position}
        onSelectPoint={onSelectPoint}
        readOnly={readOnly}
      />
    ))}
  </>
);

export default StationsLayer;
