import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import cn from 'classnames';

import type { ICompany } from '../../model/types/company';
import type { TCompanyFilterKey } from '../../model/types/company-filter';
import { mockCompanies } from '../../model/mock';
import { useGetColumns } from './columns';

import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

import styles from './companies-table.module.scss';

const CompaniesTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<ICompany, TCompanyFilterKey>();

  const columns = useGetColumns(filters);

  return (
    <div className={cn(styles['companies-table'], 'table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<ICompany>
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
          dataSource={mockCompanies}
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

export default CompaniesTable;
