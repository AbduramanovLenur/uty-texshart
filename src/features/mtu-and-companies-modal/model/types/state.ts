import type { TMtuAndCompaniesType } from './mtu-and-companies';

export interface IOpenPayload {
  type?: TMtuAndCompaniesType;
  id?: string | null;
}

export interface IState {
  isOpen: boolean;
  type: TMtuAndCompaniesType;
  id: string | null;
}
