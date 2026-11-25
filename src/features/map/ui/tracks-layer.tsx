import type { FC } from 'react';
import { GeoJSON } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';

import { trackLayerStyle } from '../model/config/layer-styles';
import { railwayTracksData } from '../model/data';

const tracksGeoJson = railwayTracksData as GeoJsonObject;

const TracksLayer: FC = () => (
  <GeoJSON data={tracksGeoJson} style={trackLayerStyle} />
);

export default TracksLayer;
