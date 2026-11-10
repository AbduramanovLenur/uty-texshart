import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, type TableProps } from 'antd';
import cn from 'classnames';

import type { TColumnFilters, TFilterKey, TTableFilters } from '../model/types/filters';
import { mockUsers } from '../model/mock';
import { useGetColumns } from './columns';

import type { IUserTableRow } from '@entities/user';
import { defaultValues } from '@shared/config';
import { Paginator } from '@shared/ui';

const UsersTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const [filters, setFilters] = useState<TTableFilters>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
  });
  const columns = useGetColumns(filters);

  const handleTableChange: TableProps<IUserTableRow>['onChange'] = (
    _,
    nextFilters: TColumnFilters,
    sorter,
  ) => {
    const activeSorter = Array.isArray(sorter) ? sorter[0] : sorter;

    setFilters(({ page, limit }) => ({
      ...nextFilters,
      page,
      limit,
      sortBy: activeSorter?.order ? (activeSorter.columnKey as TFilterKey) : null,
      sortOrder: activeSorter?.order ?? null,
    }));
  };

  const handlePaginationChange = (page: number, limit: number) => {
    setFilters((prev) => ({ ...prev, page, limit }));
  };

  return (
    <div className={cn('table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<IUserTableRow>
          rowKey='id'
          classNames={{
            root: 'table',
            header: {
              cell: 'table-header-cell',
            },
            body: {
              row: 'table-body-row',
            },
          }}
          dataSource={mockUsers}
          columns={columns}
          pagination={false}
          scroll={{ x: 'max-content' }}
          onChange={handleTableChange}
        />
      </div>
      <div className={cn('table-wrapper-pagination')}>
        <Paginator
          total={total}
          page={filters.page}
          limit={filters.limit}
          onChange={handlePaginationChange}
          summary={t('summary', { count: total })}
        />
      </div>
    </div>
  );
};

export default UsersTable;
