import type { PathOptions } from 'leaflet';

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
