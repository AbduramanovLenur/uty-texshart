import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, type TableProps } from 'antd';
import cn from 'classnames';

import type { ITechnicalParameter } from '../../model/types/technical-parameter';
import type {
  TTechnicalParameterColumnFilters,
  TTechnicalParameterFilterKey,
  TTechnicalParameterTableFilters,
} from '../../model/types/technical-parameter-filters';
import { mockTechnicalParameters } from '../../model/technical-parameters-mock';
import { useGetColumns } from './columns';

import { defaultValues } from '@shared/config';
import { Paginator } from '@shared/ui';

import styles from './technical-parameters-table.module.scss';

const TechnicalParametersTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const [filters, setFilters] = useState<TTechnicalParameterTableFilters>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
  });

  const handleStatusChange = (id: number, checked: boolean) => {
    console.log(id, checked);
  };

  const columns = useGetColumns(filters, handleStatusChange);

  const handleTableChange: TableProps<ITechnicalParameter>['onChange'] = (
    _,
    nextFilters: TTechnicalParameterColumnFilters,
    sorter,
  ) => {
    const activeSorter = Array.isArray(sorter) ? sorter[0] : sorter;

    setFilters(({ page, limit }) => ({
      ...nextFilters,
      page,
      limit,
      sortBy: activeSorter?.order ? (activeSorter.columnKey as TTechnicalParameterFilterKey) : null,
      sortOrder: activeSorter?.order ?? null,
    }));
  };

  const handlePaginationChange = (page: number, limit: number) => {
    setFilters((prev) => ({ ...prev, page, limit }));
  };

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
