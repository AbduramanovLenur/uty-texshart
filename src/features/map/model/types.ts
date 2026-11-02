export interface IStationProperties {
  nomi?: string;
  nomi_ru?: string;
  turi?: string;
  esr?: string;
  viloyat?: string;
  hudud?: string;
  km?: number | null;
  pk?: number | null;
  mtu?: string;
  pch?: string;
}

export interface ITrackProperties {
  nomi?: string | null;
  turi?: string;
  elektrlashgan?: boolean | null;
  kuchlanish?: string | null;
  uzunlik_m?: number | null;
  viloyat?: string | null;
  tuman?: string | null;
}

export interface IRailwayRegionProperties {
  nomi?: string;
  maydon_km2?: number | null;
  viloyatlar?: string[];
}

export interface IRegionProperties {
  nomi?: string;
  nomi_ru?: string;
  markaz?: string;
  maydon_km2?: number | null;
}

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
