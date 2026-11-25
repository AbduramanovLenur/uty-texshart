import type { MapTileType } from '../constants/map-tile-type';

export type TMapTileType = (typeof MapTileType)[keyof typeof MapTileType];

export interface IMapTileConfig {
  url: string;
  attribution: string;
  subdomains: string | string[];
  maxZoom: number;
  maxNativeZoom?: number;
}
