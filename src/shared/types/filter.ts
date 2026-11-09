import type { Dayjs } from 'dayjs';
import type { FilterDropdownProps } from 'antd/es/table/interface';

import type { FilterDropdownKeys, SortOrders } from '@shared/config';

export type TTableSortOrder = (typeof SortOrders)[keyof typeof SortOrders];

export type TFilterDropdownKey = (typeof FilterDropdownKeys)[keyof typeof FilterDropdownKeys];

export interface IBaseTableFilters<T> {
  page: number;
  limit: number;
  sortBy?: T | null;
  sortOrder?: TTableSortOrder | null;
}
export type TRangeValue = [Dayjs | null, Dayjs | null] | null;

export type TFilterDropdownControls = Pick<FilterDropdownProps, TFilterDropdownKey>;
