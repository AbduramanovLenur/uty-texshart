export interface IStationProperties {
  osm_id?: number | null;
  nomi?: string;
  nomi_ru?: string;
  turi?: string;
  esr?: string;
  viloyat_iso?: string;
  viloyat?: string;
  hudud?: string;
  km?: number | null;
  pk?: number | null;
  oqi_km?: number | null;
  mtu?: string;
  pch?: string;
  rasmiy_nomi?: string;
}

export interface IStationWithKm {
  props: IStationProperties;
  oqi_km: number;
  lat: number;
  lng: number;
}
