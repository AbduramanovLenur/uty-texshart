export interface ITrackDistanceStation {
  station: string;
  km: number;
  picket: number;
  code: string;
  position_km: number;
}

export interface ITrackDistanceGroup {
  pch: string;
  mtu_confidence?: string;
  station_count?: number;
  stations: ITrackDistanceStation[];
}

export interface IMtuDistance {
  mtu: string;
  distances: ITrackDistanceGroup[];
}

export interface IStationDistanceInfo {
  mtu: string;
  pch: string;
  distance: ITrackDistanceStation;
}
