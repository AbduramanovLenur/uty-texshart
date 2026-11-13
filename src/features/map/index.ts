export { default as Map } from './ui/map';

export { STATION_CLICK_ZOOM, TRACK_CLICK_ZOOM, FOCUS_POINT_ZOOM } from './model/constants/zoom';
export { MAX_RAILWAY_DISTANCE_METERS } from './model/constants/railway';
export { mapDefaultCenter, mapDefaultZoom, mapTileLayer } from './model/config/map';
export { stationMarkerConfig, selectedMarkerConfig } from './model/config/markers';
export {
  trackLayerStyle,
  trackHitboxStyle,
  railwayRegionStyle,
  regionLayerStyle,
} from './model/config/layer-styles';
export {
  trackDistances,
  stationDistancesMap,
  railwayRegionsData,
  railwayTracksData,
  regionsData,
  stationsData,
  trackDistancesData,
} from './model/data';

export type { IStationProperties } from './model/types/station';
export type { ITrackProperties } from './model/types/track';
export type { IRailwayRegionProperties, IRegionProperties } from './model/types/region';
export type {
  ITrackDistanceStation,
  ITrackDistanceGroup,
  IMtuDistance,
  IStationDistanceInfo,
} from './model/types/distance';
