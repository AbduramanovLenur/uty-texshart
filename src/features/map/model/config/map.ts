import { MapTileType } from '../constants/map-tile-type';
import type { IMapTileConfig, TMapTileType } from '../types/map-type';
import type { TCoordinates } from '../types/coordinates';

export const mapDefaultCenter: TCoordinates = [41.3775, 64.5853];
export const mapDefaultZoom = 6;
export const mapMaxZoom = 19;

export const mapTileLayers: Record<TMapTileType, IMapTileConfig> = {
  [MapTileType.SCHEMA]: {
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OSM France</a>',
    subdomains: 'abc',
    maxZoom: mapMaxZoom,
    maxNativeZoom: 19,
  },
  [MapTileType.STREET]: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abc',
    maxZoom: mapMaxZoom,
    maxNativeZoom: 19,
  },
  [MapTileType.SATELLITE]: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution:
      '&copy; <a href="https://www.esri.com/">Esri</a>, Maxar, Earthstar Geographics',
    subdomains: 'abc',
    maxZoom: mapMaxZoom,
    maxNativeZoom: 17,
  },
};
