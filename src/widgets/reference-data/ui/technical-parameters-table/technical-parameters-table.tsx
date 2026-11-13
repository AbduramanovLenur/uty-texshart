import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import cn from 'classnames';

import type { ITechnicalParameter } from '../../model/types/technical-parameter';
import type { TTechnicalParameterFilterKey } from '../../model/types/technical-parameter-filters';
import { mockTechnicalParameters } from '../../model/technical-parameters-mock';
import { useGetColumns } from './columns';

import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

import styles from './technical-parameters-table.module.scss';

const TechnicalParametersTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<ITechnicalParameter, TTechnicalParameterFilterKey>();

  const columns = useGetColumns(filters);

  return (
    <div className={cn(styles['technical-parameters-table'], 'table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<ITechnicalParameter>
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
          dataSource={mockTechnicalParameters}
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

export default TechnicalParametersTable;
