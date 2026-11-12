import { Table } from 'antd';
import type { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import type { TFilterKey } from '../model/types/filters';
import { useGetColumns } from './columns';
import { mockPayments } from '../model/mock';

import type { IPayment } from '@entities/payment';
import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

const PaymentHistoryTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<IPayment, TFilterKey>();

  const columns = useGetColumns(filters);

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
