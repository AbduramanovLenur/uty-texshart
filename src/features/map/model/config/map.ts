import { MapTileType } from '../constants/map-tile-type';
import type { IMapTileConfig, TMapTileType } from '../types/map-type';

export const mapDefaultCenter: [number, number] = [41.3775, 64.5853];
export const mapDefaultZoom = 6;
export const mapMaxZoom = 19;

export const mapTileLayers: Record<TMapTileType, IMapTileConfig> = {
  [MapTileType.SCHEMA]: {
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: mapMaxZoom,
    maxNativeZoom: 18,
  },
  [MapTileType.STREET]: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abc',
    maxZoom: mapMaxZoom,
    maxNativeZoom: 18,
  },
  [MapTileType.SATELLITE]: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution:
      '&copy; <a href="https://www.esri.com/">Esri</a>, Maxar, Earthstar Geographics',
    subdomains: 'abc',
    maxZoom: mapMaxZoom,
    maxNativeZoom: 18,
  },
};

export const mapTileLayer = mapTileLayers[MapTileType.STREET];
