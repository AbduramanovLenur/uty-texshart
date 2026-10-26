import type { FilterValue } from 'antd/es/table/interface';
import type { Dayjs } from 'dayjs';
import type { FilterDropdownProps } from 'antd/es/table/interface';

import type { filterKeys } from '@shared/config';

export type TFilterKey = (typeof filterKeys)[keyof typeof filterKeys];

export type TTableFilters = Partial<Record<TFilterKey, FilterValue | null>> & {
  page: number;
  limit: number;
};

export type TRangeValue = [Dayjs | null, Dayjs | null] | null;

export type TFilterDropdownControls = Pick<FilterDropdownProps, 'setSelectedKeys' | 'selectedKeys' | 'confirm' | 'clearFilters'>;

