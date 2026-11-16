import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import cn from 'classnames';

import type { TFilterKey } from '../model/types/filter';
import { useGetColumns } from './columns';
import { mockCommunicationsRegister } from '../model/mock';

import type { ICommunicationRegister } from '@entities/communication-register';
import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

import styles from './communications-register-table.module.scss';

const CommunicationsRegisterTable: FC = () => {
  const { t } = useTranslation();
  const { filters, handleTableChange, handlePaginationChange } = useTableFilters<ICommunicationRegister, TFilterKey>();
  const columns = useGetColumns(filters);
  const total = 125;

  return (
    <div className={cn('table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<ICommunicationRegister>
          classNames={{
            root: cn('table'),
            header: {
              cell: cn('table-header-cell'),
            },
            body: {
              row: cn('table-body-row'),
            },
          }}
          rowClassName={(record) =>
            cn('table-body-row', {
              [styles['communications-register-table__row--no-tech-spec']]: !record.hasTechnicalSpecification,
            })
          }
          dataSource={mockCommunicationsRegister}
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

export default CommunicationsRegisterTable;
