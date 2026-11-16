import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import cn from 'classnames';

import type { TFilterKey } from '../model/types/filter';
import { useGetColumns } from './columns';
import { mockTechnicalSpecifications } from '../model/mock';

import type { ITechnicalSpecification } from '@entities/technical-specification';
import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

const TechnicalSpecificationsTable: FC = () => {
  const { t } = useTranslation();
  const { filters, handleTableChange, handlePaginationChange } = useTableFilters<ITechnicalSpecification, TFilterKey>();
  const columns = useGetColumns(filters);
  const total = 125;

  return (
    <div className={cn('table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<ITechnicalSpecification>
          classNames={{
            root: cn('table'),
            header: {
              cell: cn('table-header-cell'),
            },
            body: {
              row: cn('table-body-row'),
            },
          }}
          dataSource={mockTechnicalSpecifications}
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

export default TechnicalSpecificationsTable;
