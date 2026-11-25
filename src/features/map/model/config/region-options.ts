import type { FeatureCollection, Geometry } from 'geojson';

import { railwayRegionsData } from '../data';
import { parseRegionsGeoJson } from '../lib/utils/parse-regions-geojson';
import type { IRegionOption } from '../types/region-option';
import type { IRegionFeatureProperties } from '../types/region';

export const defaultRegionOptions: IRegionOption[] = parseRegionsGeoJson(
  railwayRegionsData as unknown as FeatureCollection<Geometry, IRegionFeatureProperties>,
);
