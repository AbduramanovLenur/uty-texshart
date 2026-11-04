import type { PathOptions } from 'leaflet';

export const mapDefaultCenter: [number, number] = [41.3775, 64.5853];
export const mapDefaultZoom = 6;
export const stationClickZoom = 14;
export const trackClickZoom = 13;
export const focusPointZoom = 14;

export const maxRailwayDistanceMeters = 300;

export const mapTileLayer = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
};

export const stationMarkerConfig = {
  defaultRadius: 5,
  hoverRadius: 7,
  fillColor: '#ffffff',
  color: '#141414',
  weight: 1.5,
  fillOpacity: 1,
};

export const selectedMarkerConfig = {
  radius: 8,
  fillColor: '#ff4d4f',
  color: '#ffffff',
  weight: 2.5,
  fillOpacity: 1,
};

export const trackLayerStyle: PathOptions = {
  color: '#1f1f1f',
  weight: 2.5,
  opacity: 0.95,
  interactive: false,
};

export const trackHitboxStyle: PathOptions = {
  weight: 16,
  opacity: 0.0001,
  color: '#000000',
  interactive: true,
};

export const railwayRegionStyle: PathOptions = {
  color: '#1890ff',
  weight: 2,
  fillOpacity: 0.08,
  interactive: false,
};

export const regionLayerStyle: PathOptions = {
  color: '#8c8c8c',
  weight: 1.5,
  dashArray: '4, 4',
  fillOpacity: 0.05,
  interactive: false,
};
