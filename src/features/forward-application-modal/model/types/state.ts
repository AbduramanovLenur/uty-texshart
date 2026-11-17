export interface IOpenPayload {
  id?: number | string | null;
  key?: string | null;
}

export interface IState {
  isOpen: boolean;
  id: number | string | null;
  key: string | null;
}
