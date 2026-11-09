import { Table, type TableProps } from 'antd';
import { useState, type FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import type { TColumnFilters, TFilterKey, TTableFilters } from '../model/types/payment-history';
import { useGetColumns } from './columns';
import { mockPayments } from '../model/mock';

import type { IPayment } from '@entities/payment';
import { defaultValues } from '@shared/config';
import { Paginator } from '@shared/ui';

const PaymentHistoryTable: FC = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<TTableFilters>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
  });
  const columns = useGetColumns(filters);
  const total = 125;

  const handleTableChange: TableProps<IPayment>['onChange'] = (
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
        <Table<IPayment>
          classNames={{
            root: 'table',
            header: {
              cell: 'table-header-cell',
            },
            body: {
              row: 'table-body-row',
            },
          }}
          dataSource={mockPayments}
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

export default PaymentHistoryTable;
