import type { PathOptions } from 'leaflet';

export const trackLayerStyle: PathOptions = {
  color: '#1677ff',
  weight: 2.5,
  dashArray: '8, 6',
  lineCap: 'round',
  lineJoin: 'round',
  opacity: 0.95,
  interactive: false,
};

export const railwayRegionStyle: PathOptions = {
  color: '#1677ff',
  weight: 1.5,
  fillOpacity: 0.06,
  interactive: false,
};

export const regionLayerStyle: PathOptions = {
  color: '#8c8c8c',
  weight: 1.5,
  dashArray: '4, 4',
  fillOpacity: 0.04,
  interactive: false,
};
