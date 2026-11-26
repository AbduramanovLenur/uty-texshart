import type { PathOptions } from 'leaflet';

export const trackLayerStyle: PathOptions = {
  color: '#001D66',
  weight: 1.5,
  dashArray: '8, 6',
  lineCap: 'round',
  lineJoin: 'round',
  interactive: false,
};

export const railwayRegionStyle: PathOptions = {
  color: '#1677ff',
  weight: 1.5,
  fillOpacity: 0.04,
  interactive: false,
};

export const regionLayerStyle: PathOptions = {
  color: '#9254de',
  weight: 1.5,
  dashArray: '5, 5',
  opacity: 0.7,
  fillColor: '#9254de',
  fillOpacity: 0.03,
  interactive: false,
};
