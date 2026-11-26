import type { FC } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import RegionsLayer from './regions-layer';
import RailwayRegionsLayer from './railway-regions-layer';
import type { IState } from '../model/types/state';

const MapRegionLayers: FC = () => {
  const { layerFilters } = useSelector(
    (state: { mapSlice: IState }) => ({
      layerFilters: state.mapSlice.layerFilters,
    }),
    shallowEqual,
  );

  return (
    <>
      {layerFilters.regions && <RegionsLayer />}
      {layerFilters.railwayRegions && <RailwayRegionsLayer />}
    </>
  );
};

export default MapRegionLayers;
