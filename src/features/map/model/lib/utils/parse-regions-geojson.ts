import type { FeatureCollection, Geometry } from 'geojson';
import type { IRegionOption } from '../../types/region-option';
import type { IRegionFeatureProperties } from '../../types/region';

const getGeometryBounds = (geometry: Geometry): [[number, number], [number, number]] | undefined => {
  let minLng = Infinity;
  let maxLng = -Infinity;
  let minLat = Infinity;
  let maxLat = -Infinity;

  const traverse = (coords: unknown): void => {
    if (!Array.isArray(coords)) return;
    if (typeof coords[0] === 'number' && typeof coords[1] === 'number') {
      const [lng, lat] = coords;
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
      return;
    }
    for (const item of coords) {
      traverse(item);
    }
  };

  if ('coordinates' in geometry) {
    traverse(geometry.coordinates);
  }

  if (!isFinite(minLat) || !isFinite(minLng)) {
    return undefined;
  }

  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ];
};

export const parseRegionsGeoJson = (geoJson: FeatureCollection<Geometry, IRegionFeatureProperties>): IRegionOption[] => {
  return (geoJson.features ?? []).map((feature) => {
    const props = feature.properties;
    const value = String(props?.id ?? props?.iso ?? props?.soato ?? '');
    const label = String(props?.nomi ?? props?.name ?? value);
    const bounds = feature.geometry ? getGeometryBounds(feature.geometry) : undefined;

    return {
      value,
      label,
      bounds,
    };
  });
};
