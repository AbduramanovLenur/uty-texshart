import type { TReferenceDataType } from './reference-data';

export interface IOpenPayload {
  referenceType?: TReferenceDataType;
  id?: number | string | null;
}

export interface IState {
  isOpen: boolean;
  referenceType: TReferenceDataType;
  id: number | string | null;
}
