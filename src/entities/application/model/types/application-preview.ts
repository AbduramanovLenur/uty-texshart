import type { TNetworkType } from './network-type';

export interface IApplicationPreview {
  id: number;
  code: string;
  type: TNetworkType;
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}
