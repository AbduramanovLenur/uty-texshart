import type { FC } from 'react';

import { stationsData } from '../model/data';
import type { IStationProperties } from '../model/types/station';

import StationMarker from './station-marker';

interface IProps {
  onSelectPoint?: (coords: [number, number]) => void;
  readOnly?: boolean;
}

const StationsLayer: FC<IProps> = ({ onSelectPoint, readOnly = false }) => {
  return (
    <>
      {stationsData.features.map((feature, index) => {
        const [lng, lat] = feature.geometry.coordinates;
        const key = `${feature.properties.esr || 'station'}-${index}`;

        return (
          <StationMarker
            key={key}
            position={[lat, lng]}
            properties={feature.properties as IStationProperties}
            onSelectPoint={onSelectPoint}
            readOnly={readOnly}
          />
        );
      })}
    </>
  );
};

export default StationsLayer;
