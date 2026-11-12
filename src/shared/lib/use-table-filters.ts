import { useState } from 'react';
import type { TableProps } from 'antd';
import type { FilterValue } from 'antd/es/table/interface';

import { defaultValues } from '@shared/config';
import type { TTableFilterState } from '@shared/types';

export const useTableFilters = <TRow, TFilterKey extends string>(initialFilters?: Partial<TTableFilterState<TFilterKey>>) => {
  const [filters, setFilters] = useState<TTableFilterState<TFilterKey>>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
    sortBy: null,
    sortOrder: null,
    ...initialFilters,
  } as TTableFilterState<TFilterKey>);

  const handleTableChange: TableProps<TRow>['onChange'] = (
    _,
    nextFilters,
    sorter,
  ) => {
    const activeSorter = Array.isArray(sorter) ? sorter[0] : sorter;

    setFilters((prev) => ({
      ...prev,
      ...(nextFilters as Partial<Record<TFilterKey, FilterValue | null>>),
      sortBy: activeSorter?.order
        ? (activeSorter.columnKey as TFilterKey)
        : null,
      sortOrder: activeSorter?.order ?? null,
    }));
  };

  const handlePaginationChange = (page: number, limit: number) => {
    setFilters((prev) => ({ ...prev, page, limit }));
  };

  return {
    filters,
    setFilters,
    handleTableChange,
    handlePaginationChange,
  };
};
