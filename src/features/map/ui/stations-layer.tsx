import type { FC } from 'react';

import type { IStationWithKm } from '../model/types/station';
import type { TCoordinates } from '../model/types/coordinates';

import StationMarker from './station-marker';

interface IProps {
  stations: IStationWithKm[];
  onSelectPoint: (coords: TCoordinates) => void;
  readOnly: boolean;
}

const StationsLayer: FC<IProps> = ({
  stations,
  onSelectPoint,
  readOnly = false,
}) => (
  <>
    {stations.map(station => (
      <StationMarker
        key={station.props.esr}
        position={[station.lat, station.lng]}
        onSelectPoint={onSelectPoint}
        readOnly={readOnly}
      />
    ))}
  </>
);

export default StationsLayer;
