import type { PathOptions } from 'leaflet';

export const trackLayerStyle: PathOptions = {
  color: 'var(--ant-blue-10)',
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
  color: '#722ed1',
  weight: 1.8,
  dashArray: '5, 5',
  opacity: 0.9,
  fillColor: '#722ed1',
  fillOpacity: 0.04,
  interactive: false,
};
