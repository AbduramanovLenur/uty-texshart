import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import cn from 'classnames';

import type { IMtu } from '../../model/types/mtu';
import type { TMtuFilterKey } from '../../model/types/mtu-filter';
import { mockMtus } from '../../model/mock';
import { useGetColumns } from './columns';

import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

import styles from './mtu-table.module.scss';

const MtuTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<IMtu, TMtuFilterKey>();

  const handleStatusChange = (id: number, checked: boolean) => {
    console.log(id, checked);
  };

  const columns = useGetColumns(filters, handleStatusChange);

  return (
    <div className={cn(styles['mtu-table'], 'table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<IMtu>
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
          dataSource={mockMtus}
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

export default MtuTable;
