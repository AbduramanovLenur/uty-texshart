import type { FilterValue } from 'antd/es/table/interface';

import type { CommunicationTypeFilterKeys } from '../constants/communication-type-filter-keys';

import type { IBaseTableFilters } from '@shared/types';

export type TCommunicationTypeFilterKey =
  (typeof CommunicationTypeFilterKeys)[keyof typeof CommunicationTypeFilterKeys];

export type TCommunicationTypeColumnFilters = Partial<
  Record<TCommunicationTypeFilterKey, FilterValue | null>
>;

export type TCommunicationTypeTableFilters = IBaseTableFilters<TCommunicationTypeFilterKey> &
  TCommunicationTypeColumnFilters;
