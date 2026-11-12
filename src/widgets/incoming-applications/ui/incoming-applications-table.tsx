import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Table } from 'antd';
import cn from 'classnames';

import type { TFilterKey } from '../model/types/filter';
import { useGetColumns } from './columns';
import { incomingApplicationsMock } from '../model/mock';

import { ViewApplicantModal, open as openViewApplicantModal } from '@features/view-applicant-modal';
import { ViewProcessModal, open as openViewProcessModal } from '@features/view-process-modal';
import { type IIncomingApplication } from '@entities/application';
import { useTableFilters } from '@shared/lib';
import { Paginator } from '@shared/ui';

const IncomingApplicationsTable: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const total = 125;
  const {
    filters,
    handleTableChange,
    handlePaginationChange,
  } = useTableFilters<IIncomingApplication, TFilterKey>();

  const handleOpenApplicantModal = (record: IIncomingApplication) => {
    dispatch(openViewApplicantModal({ id: record.id }));
  };

  const handleOpenProcessModal = (record: IIncomingApplication) => {
    dispatch(openViewProcessModal({ id: record.id }));
  };

  const columns = useGetColumns(filters, handleOpenApplicantModal, handleOpenProcessModal);

  return (
    <div className={cn('table-wrapper')}>
      <div className={cn('table-wrapper-body', 'scrollbar')}>
        <Table<IIncomingApplication>
          classNames={{
            root: 'table',
            header: {
              cell: 'table-header-cell',
            },
            body: {
              row: 'table-body-row',
            },
          }}
          dataSource={incomingApplicationsMock}
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
      <ViewApplicantModal />
      <ViewProcessModal />
    </div>
  );
};

export default IncomingApplicationsTable;
