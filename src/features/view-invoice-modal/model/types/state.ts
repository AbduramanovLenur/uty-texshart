export interface IOpenPayload {
  id?: string | number | null;
  url?: string | null;
}

export interface IState {
  isOpen: boolean;
  id: string | number | null;
  url: string | null;
}
