import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import cn from 'classnames';

import type { ICrossingMethod } from '../../model/types/crossing-method';
import type { TCrossingMethodFilterKey } from '../../model/types/crossing-method-filters';
import { mockCrossingMethods } from '../../model/crossing-methods-mock';
import { useGetColumns } from './columns';

import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

import styles from './crossing-methods-table.module.scss';

const CrossingMethodsTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<ICrossingMethod, TCrossingMethodFilterKey>();

  const columns = useGetColumns(filters);

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
