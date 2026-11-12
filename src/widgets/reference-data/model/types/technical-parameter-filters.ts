import type { FilterValue } from 'antd/es/table/interface';

import type { TechnicalParameterFilterKeys } from '../constants/technical-parameter-filter-keys';

import type { IBaseTableFilters } from '@shared/types';

export type TTechnicalParameterFilterKey =
  (typeof TechnicalParameterFilterKeys)[keyof typeof TechnicalParameterFilterKeys];

export type TTechnicalParameterColumnFilters = Partial<
  Record<TTechnicalParameterFilterKey, FilterValue | null>
>;

export type TTechnicalParameterTableFilters = IBaseTableFilters<TTechnicalParameterFilterKey> &
  TTechnicalParameterColumnFilters;
