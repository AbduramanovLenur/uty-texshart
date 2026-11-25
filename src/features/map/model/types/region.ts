export interface IRailwayRegionProperties {
  id?: string;
  nomi?: string;
  maydon_km2?: number | null;
  viloyatlar?: string[];
}

export interface IRegionProperties {
  iso?: string;
  nomi?: string;
  nomi_ru?: string;
  markaz?: string;
  soato?: string;
  hudud?: string;
  maydon_km2?: number | null;
}

export interface IRegionFeatureProperties {
  id?: string | number;
  iso?: string;
  soato?: string | number;
  nomi?: string;
  nomi_ru?: string;
  name?: string;
  [key: string]: unknown;
}
