import type { FilterValue } from 'antd/es/table/interface';

import type { CrossingMethodFilterKeys } from '../constants/crossing-method-filter-keys';

import type { IBaseTableFilters } from '@shared/types';

export type TCrossingMethodFilterKey =
  (typeof CrossingMethodFilterKeys)[keyof typeof CrossingMethodFilterKeys];

export type TCrossingMethodColumnFilters = Partial<
  Record<TCrossingMethodFilterKey, FilterValue | null>
>;

export type TCrossingMethodTableFilters = IBaseTableFilters<TCrossingMethodFilterKey> &
  TCrossingMethodColumnFilters;
