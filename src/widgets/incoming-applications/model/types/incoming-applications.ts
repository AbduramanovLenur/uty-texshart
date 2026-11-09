import type { FilterValue } from 'antd/es/table/interface';

import type { FilterKeys } from '../constants/filter-keys';

import type { IBaseTableFilters } from '@shared/types';

export type TFilterKey = (typeof FilterKeys)[keyof typeof FilterKeys];

export type TColumnFilters = Partial<Record<TFilterKey, FilterValue | null>>;

export type TTableFilters = IBaseTableFilters<TFilterKey> & TColumnFilters;
