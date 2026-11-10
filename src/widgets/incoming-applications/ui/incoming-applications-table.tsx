import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Table, type TableProps } from 'antd';
import cn from 'classnames';

import type { TColumnFilters, TFilterKey, TTableFilters } from '../model/types/incoming-applications';
import { useGetColumns } from './columns';
import { incomingApplicationsMock } from '../model/mock';

import { ViewApplicantModal, open as openViewApplicantModal } from '@features/view-applicant-modal';
import { ViewProcessModal, open as openViewProcessModal } from '@features/view-process-modal';
import { type IIncomingApplication } from '@entities/application';
import { Paginator } from '@shared/ui';
import { defaultValues } from '@shared/config';

const IncomingApplicationsTable: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const total = 125;
  const [filters, setFilters] = useState<TTableFilters>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
  });

  const handleTableChange: TableProps<IIncomingApplication>['onChange'] = (
    _,
    nextFilters: TColumnFilters,
    sorter,
  ) => {
    const activeSorter = Array.isArray(sorter) ? sorter[0] : sorter;

    setFilters(({ page, limit }) => ({
      ...nextFilters,
      page,
      limit,
      sortBy: activeSorter?.order ? (activeSorter.columnKey as TFilterKey) : null,
      sortOrder: activeSorter?.order ?? null,
    }));
  };

  const handlePaginationChange = (page: number, limit: number) => {
    setFilters((prev) => ({ ...prev, page, limit }));
  };

  const handleOpenApplicantModal = (record: IIncomingApplication) => {
    dispatch(openViewApplicantModal(record.id));
  };

  const handleOpenProcessModal = (record: IIncomingApplication) => {
    dispatch(openViewProcessModal(record.id));
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
