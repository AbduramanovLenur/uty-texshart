import type { FilterValue } from 'antd/es/table/interface';
import type { Dayjs } from 'dayjs';
import type { FilterDropdownProps } from 'antd/es/table/interface';

import type { filterKeys } from '@shared/config';

export type TFilterKey = (typeof filterKeys)[keyof typeof filterKeys];

export type TTableSortOrder = 'ascend' | 'descend';

export type TTableFilters = Partial<Record<TFilterKey, FilterValue | null>> & {
  page: number;
  limit: number;
  sortBy?: TFilterKey | null;
  sortOrder?: TTableSortOrder | null;
};

export type TRangeValue = [Dayjs | null, Dayjs | null] | null;

export type TFilterDropdownControls = Pick<FilterDropdownProps, 'setSelectedKeys' | 'selectedKeys' | 'confirm' | 'clearFilters'>;

