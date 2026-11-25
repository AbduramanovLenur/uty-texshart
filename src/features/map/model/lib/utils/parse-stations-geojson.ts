import type { FeatureCollection, Geometry } from 'geojson';
import type { IStationProperties, IStationWithKm } from '../../types/station';

export const parseStationsGeoJson = (geoJson: FeatureCollection<Geometry, IStationProperties>): IStationWithKm[] => {
  return (geoJson.features ?? []).flatMap((feature) => {
    const props = feature.properties;
    const oqiKm = Number(props?.oqi_km);

    if (
      props?.oqi_km === null ||
      props?.oqi_km === undefined ||
      Number.isNaN(oqiKm) ||
      !feature.geometry ||
      !('coordinates' in feature.geometry) ||
      !Array.isArray(feature.geometry.coordinates) ||
      feature.geometry.coordinates.length < 2
    ) {
      return [];
    }

    const [lng, lat] = feature.geometry.coordinates as [number, number];

    return [{ props, oqi_km: oqiKm, lat, lng }];
  });
};
