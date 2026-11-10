import type { NetworkTypes } from '../constants/network-types';

export type TNetworkType =
  (typeof NetworkTypes)[keyof typeof NetworkTypes];
