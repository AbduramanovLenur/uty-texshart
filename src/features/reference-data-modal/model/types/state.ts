import type { TReferenceDataType } from './reference-data';

export interface IOpenPayload {
  type?: TReferenceDataType;
  id?: string | null;
}

export interface IState {
  isOpen: boolean;
  type: TReferenceDataType;
  id: string | null;
}
