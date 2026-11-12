import type { CrossingMethodFilterKeys } from '../constants/crossing-method-filter-keys';

export type TCrossingMethodFilterKey = (typeof CrossingMethodFilterKeys)[keyof typeof CrossingMethodFilterKeys];
