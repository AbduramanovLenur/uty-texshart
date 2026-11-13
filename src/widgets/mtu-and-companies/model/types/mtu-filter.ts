import type { MtuFilterKeys } from '../constants/mtu-filter-keys';

export type TMtuFilterKey = (typeof MtuFilterKeys)[keyof typeof MtuFilterKeys];
