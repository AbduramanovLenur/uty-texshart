import type { TFilterKey, TTableFilters, TTableSortOrder } from '@shared/types';

export const getSortOrder = (
  filters: TTableFilters,
  key: TFilterKey,
): TTableSortOrder | null =>
  filters.sortBy === key ? (filters.sortOrder ?? null) : null;
