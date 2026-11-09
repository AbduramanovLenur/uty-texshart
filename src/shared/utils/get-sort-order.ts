import type { IBaseTableFilters, TTableSortOrder } from '@shared/types';

export const getSortOrder = <TKey extends string>(
  filters: IBaseTableFilters<TKey>,
  key: TKey,
): TTableSortOrder | null => filters.sortBy === key ? (filters.sortOrder ?? null) : null;
