import railwayRegionsData from './json/railway-regions.json';
import railwayTracksData from './json/railway-tracks.json';
import regionsData from './json/regions.json';
import stationsData from './json/stations.json';
import trackDistancesData from './json/track-distances.json';

import type { IMtuDistance, IStationDistanceInfo } from './types';

export const trackDistances = trackDistancesData as IMtuDistance[];

export const stationDistancesMap = new Map<string, IStationDistanceInfo>();

trackDistances.forEach((mtuGroup) => {
  mtuGroup.distances?.forEach((pchGroup) => {
    pchGroup.stations?.forEach((station) => {
      if (station.code) {
        stationDistancesMap.set(String(station.code), {
          mtu: mtuGroup.mtu,
          pch: pchGroup.pch,
          distance: station,
        });
      }
    });
  });
});

export {
  railwayRegionsData,
  railwayTracksData,
  regionsData,
  stationsData,
  trackDistancesData,
};
