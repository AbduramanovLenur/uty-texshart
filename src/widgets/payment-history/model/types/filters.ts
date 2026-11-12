import type { FilterKeys } from '../constants/filter-keys';

export type TFilterKey = (typeof FilterKeys)[keyof typeof FilterKeys];
