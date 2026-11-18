import type { TNetworkType } from './network-type';

export interface IApplicationPreview {
  id: string;
  code: string;
  type: TNetworkType;
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}
