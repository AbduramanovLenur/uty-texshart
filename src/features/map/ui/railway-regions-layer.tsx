import type { FC } from 'react';
import { GeoJSON } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';

import { railwayRegionStyle } from '../model/config/layer-styles';
import { railwayRegionsData } from '../model/data';

const railwayRegionsGeoJson = railwayRegionsData as GeoJsonObject;

const RailwayRegionsLayer: FC = () => (
  <GeoJSON data={railwayRegionsGeoJson} style={railwayRegionStyle} />
);

export default RailwayRegionsLayer;
