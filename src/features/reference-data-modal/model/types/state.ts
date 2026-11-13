import type { TReferenceDataType } from './reference-data';

export interface IOpenPayload {
  type?: TReferenceDataType;
  id?: number | string | null;
}

export interface IState {
  isOpen: boolean;
  type: TReferenceDataType;
  id: number | string | null;
}
