import type { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import StationsLayer from './stations-layer';
import { defaultStationsWithKm } from '../model/config/stations';
import type { IState } from '../model/types/state';
import type { TCoordinates } from '../model/types/coordinates';

interface IProps {
  onSelectPoint?: (coordinates: TCoordinates, rawCoords?: TCoordinates) => void;
  readOnly?: boolean;
}

const MapStationsLayer: FC<IProps> = ({ onSelectPoint, readOnly = false }) => {
  const { layerFilters } = useSelector(
    (state: { mapSlice: IState }) => ({
      layerFilters: state.mapSlice.layerFilters,
    }),
    shallowEqual,
  );

  if (!layerFilters.stations) {
    return null;
  }

  return (
    <StationsLayer
      stations={defaultStationsWithKm}
      onSelectPoint={onSelectPoint}
      readOnly={readOnly}
    />
  );
};

export default MapStationsLayer;
