import type { FC } from 'react';
import { TileLayer } from 'react-leaflet';
import { shallowEqual, useSelector } from 'react-redux';

import { mapTileLayers } from '../model/config/map';
import type { IState } from '../model/types/state';

const MapTileLayer: FC = () => {
  const { tileType } = useSelector(
    (state: { mapSlice: IState }) => ({
      tileType: state.mapSlice.tileType,
    }),
    shallowEqual,
  );

  const activeTileConfig = mapTileLayers[tileType];

  return (
    <TileLayer
      key={tileType}
      attribution={activeTileConfig.attribution}
      url={activeTileConfig.url}
      subdomains={activeTileConfig.subdomains}
      maxZoom={activeTileConfig.maxZoom}
      maxNativeZoom={activeTileConfig.maxNativeZoom}
    />
  );
};

export default MapTileLayer;
