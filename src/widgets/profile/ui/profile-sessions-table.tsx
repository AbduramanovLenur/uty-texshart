import type { FC } from 'react';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { TFilterKey } from '../model/types/filter';
import type { IProfileSession } from '../model/types/session';
import { useGetColumns } from './columns';
import { profileSessionsMock } from '../model/mock';

import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

import styles from './profile-sessions-table.module.scss';

const ProfileSessionsTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<IProfileSession, TFilterKey>();
  const columns = useGetColumns(filters);

  return (
    <div className={cn(styles['profile-sessions-table'], 'table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<IProfileSession>
          rowKey='key'
          classNames={{
            root: cn('table'),
            header: {
              cell: cn('table-header-cell'),
            },
            body: {
              row: cn('table-body-row'),
            },
          }}
          dataSource={profileSessionsMock}
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

export default ProfileSessionsTable;
