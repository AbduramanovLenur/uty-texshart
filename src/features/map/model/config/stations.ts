import type { FeatureCollection, Geometry } from 'geojson';

import { stationsData } from '../data';
import { parseStationsGeoJson } from '../lib/utils/parse-stations-geojson';
import type { IStationProperties, IStationWithKm } from '../types/station';

export const defaultStationsWithKm: IStationWithKm[] = parseStationsGeoJson(
  stationsData as unknown as FeatureCollection<Geometry, IStationProperties>,
);

export const stationsWithKm = defaultStationsWithKm;
