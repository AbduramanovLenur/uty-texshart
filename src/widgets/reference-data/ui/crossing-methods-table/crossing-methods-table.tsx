import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, type TableProps } from 'antd';
import cn from 'classnames';

import type { ICrossingMethod } from '../../model/types/crossing-method';
import type {
  TCrossingMethodColumnFilters,
  TCrossingMethodFilterKey,
  TCrossingMethodTableFilters,
} from '../../model/types/crossing-method-filters';
import { mockCrossingMethods } from '../../model/crossing-methods-mock';
import { useGetColumns } from './columns';

import { defaultValues } from '@shared/config';
import { Paginator } from '@shared/ui';

import styles from './crossing-methods-table.module.scss';

const CrossingMethodsTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const [filters, setFilters] = useState<TCrossingMethodTableFilters>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
  });

  const handleStatusChange = (id: number, checked: boolean) => {
    console.log(id, checked);
  };

  const columns = useGetColumns(filters, handleStatusChange);

  const handleTableChange: TableProps<ICrossingMethod>['onChange'] = (
    _,
    nextFilters: TCrossingMethodColumnFilters,
    sorter,
  ) => {
    const activeSorter = Array.isArray(sorter) ? sorter[0] : sorter;

    setFilters(({ page, limit }) => ({
      ...nextFilters,
      page,
      limit,
      sortBy: activeSorter?.order ? (activeSorter.columnKey as TCrossingMethodFilterKey) : null,
      sortOrder: activeSorter?.order ?? null,
    }));
  };

  const handlePaginationChange = (page: number, limit: number) => {
    setFilters((prev) => ({ ...prev, page, limit }));
  };

  return (
    <div className={cn(styles['crossing-methods-table'], 'table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<ICrossingMethod>
          rowKey='id'
          classNames={{
            root: cn('table'),
            header: {
              cell: cn('table-header-cell'),
            },
            body: {
              row: cn('table-body-row'),
            },
          }}
          dataSource={mockCrossingMethods}
          columns={columns}
          pagination={false}
          scroll={{ x: 'max-content' }}
          onChange={handleTableChange}
        />
      </div>
      {!!total && (
        <div className={cn('table-wrapper-pagination')}>
          <Paginator
            total={total}
            page={filters.page}
            limit={filters.limit}
            onChange={handlePaginationChange}
            summary={t('summary', { count: total })}
          />
        </div>
      )}
    </div>
  );
};

export default CrossingMethodsTable;
