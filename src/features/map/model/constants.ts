import type { PathOptions } from 'leaflet';

export const MAP_DEFAULT_CENTER: [number, number] = [41.3775, 64.5853];
export const MAP_DEFAULT_ZOOM = 6;
export const STATION_CLICK_ZOOM = 14;
export const TRACK_CLICK_ZOOM = 13;
export const FOCUS_POINT_ZOOM = 14;

export const MAX_RAILWAY_DISTANCE_METERS = 300;

export const MAP_TILE_LAYER = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
};

export const STATION_MARKER_CONFIG = {
  defaultRadius: 5,
  hoverRadius: 7,
  fillColor: '#ffffff',
  color: '#141414',
  weight: 1.5,
  fillOpacity: 1,
};

export const SELECTED_MARKER_CONFIG = {
  radius: 8,
  fillColor: '#ff4d4f',
  color: '#ffffff',
  weight: 2.5,
  fillOpacity: 1,
};

export const TRACK_LAYER_STYLE: PathOptions = {
  color: '#1f1f1f',
  weight: 2.5,
  opacity: 0.95,
  interactive: false,
};

export const TRACK_HITBOX_STYLE: PathOptions = {
  weight: 16,
  opacity: 0.0001,
  color: '#000000',
  interactive: true,
};

export const RAILWAY_REGION_STYLE: PathOptions = {
  color: '#1890ff',
  weight: 2,
  fillOpacity: 0.08,
  interactive: false,
};

export const REGION_LAYER_STYLE: PathOptions = {
  color: '#8c8c8c',
  weight: 1.5,
  dashArray: '4, 4',
  fillOpacity: 0.05,
  interactive: false,
};
