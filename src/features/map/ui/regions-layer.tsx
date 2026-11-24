import type { FC } from 'react';
import { GeoJSON } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';

import { regionLayerStyle } from '../model/config/layer-styles';
import { regionsData } from '../model/data';

const regionsGeoJson = regionsData as GeoJsonObject;

const RegionsLayer: FC = () => (
  <GeoJSON data={regionsGeoJson} style={regionLayerStyle} />
);

export default RegionsLayer;
