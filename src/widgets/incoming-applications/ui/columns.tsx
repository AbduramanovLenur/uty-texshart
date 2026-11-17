import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { FilterKeys } from '../model/constants/filter-keys';
import type { TFilterKey } from '../model/types/filter';

import { open as openViewApplicantModal } from '@features/view-applicant-modal';
import { open as openViewProcessModal } from '@features/view-process-modal';
import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { type IIncomingApplication } from '@entities/application';
import { StatusTag } from '@shared/ui';
import { routes, Statuses } from '@shared/config';
import type { TTableFilterState } from '@shared/types';
import { getSortOrder } from '@shared/utils';
import { IconRetry } from '@shared/assets';

export const useGetColumns = (filters: TTableFilterState<TFilterKey>): TableProps<IIncomingApplication>['columns'] => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleOpenApplicantModal = (record: IIncomingApplication) => {
    dispatch(openViewApplicantModal({ id: record.id }));
  };

  const handleOpenProcessModal = (record: IIncomingApplication) => {
    dispatch(openViewProcessModal({ id: record.id }));
  };

  return [
    {
      title: t('headers.applicationId'),
      key: FilterKeys.APPLICATION_ID,
      width: 140,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.APPLICATION_ID),
      render: (_, record) => (
        <Link className={cn('table-trigger')} to={routes.SINGLE_APPLICATION(record.id)}>
          {record.id}
        </Link>
      ),
      filteredValue: filters.applicationId,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.applicationId')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
    },
    {
      title: t('headers.action'),
      width: 120,
      render: (_, record) => (
        <button
          className={cn('table-trigger')}
          type='button'
          onClick={() => handleOpenProcessModal(record)}
        >
          {t('actions.view')}
        </button>
      ),
    },
    {
      title: t('headers.applicant'),
      key: FilterKeys.APPLICANT,
      minWidth: 140,
      render: (_, record) => (
        <button
          className={cn('table-trigger')}
          type='button'
          onClick={() => handleOpenApplicantModal(record)}
        >
          {record.user}
        </button>
      ),
      filteredValue: filters.applicant,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.applicant')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
    },
    {
      title: t('headers.network'),
      key: FilterKeys.NETWORK,
      minWidth: 160,
      render: (_, record) => record.network,
      filteredValue: filters.network,
      filters: [
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
        {
          text: 'Category 3',
          value: 'Category 3',
        },
      ],
      filterSearch: true,
    },
    {
      title: t('headers.mtu'),
      key: FilterKeys.MTU,
      minWidth: 190,
      render: (_, record) => (
        <div className={cn('table-info')}>
          <div className={cn('table-info-value')}>
            {record.mtu}
          </div>
          <div className={cn('table-info-value')}>
            {record.km}
          </div>
        </div>
      ),
      filteredValue: filters.mtu,
      filters: [
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
        {
          text: 'Category 3',
          value: 'Category 3',
        },
      ],
      filterSearch: true,
    },
    {
      title: t('headers.status'),
      key: FilterKeys.STATUS,
      minWidth: 120,
      fixed: 'right',
      render: (_, record) => <StatusTag status={record.status} />,
      filteredValue: filters.status,
      filters: [
        { text: t('statuses.draft'), value: Statuses.DRAFT },
        { text: t('statuses.submitted'), value: Statuses.SUBMITTED },
        { text: t('statuses.paymentDone'), value: Statuses.PAYMENT_DONE },
        { text: t('statuses.accepted'), value: Statuses.ACCEPTED },
        { text: t('statuses.forwarded'), value: Statuses.FORWARDED },
        { text: t('statuses.actCreated'), value: Statuses.ACT_CREATED },
        { text: t('statuses.actConfirmed'), value: Statuses.ACT_CONFIRMED },
        { text: t('statuses.technicalConditionsIssued'), value: Statuses.TECHNICAL_CONDITIONS_ISSUED },
        { text: t('statuses.projectDocumentsUploaded'), value: Statuses.PROJECT_DOCUMENTS_UPLOADED },
        { text: t('statuses.constructionPermitIssued'), value: Statuses.CONSTRUCTION_PERMIT_ISSUED },
        { text: t('statuses.constructionStarted'), value: Statuses.CONSTRUCTION_STARTED },
        { text: t('statuses.constructionCompleted'), value: Statuses.CONSTRUCTION_COMPLETED },
        { text: t('statuses.constructionActUploaded'), value: Statuses.CONSTRUCTION_ACT_UPLOADED },
        { text: t('statuses.completed'), value: Statuses.COMPLETED },
        { text: t('statuses.rejected'), value: Statuses.REJECTED },
      ],
      filterSearch: true,
    },
    {
      title: t('headers.dateUpdate'),
      key: FilterKeys.DATE,
      width: 200,
      sorter: true,
      // fixed: 'right',
      sortOrder: getSortOrder(filters, FilterKeys.DATE),
      filteredValue: filters.date,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableDateRangeFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          displayFormat='DD.MM.YYYY'
          valueFormat='YYYY-MM-DD'
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      render: (_, record) => (
        <div className={cn('table-date')}>
          <div className={cn('table-date-create')}>
            {record.date}
          </div>
          <div className={cn('table-date-update')}>
            <IconRetry />
            {record.updatedAt}
          </div>
        </div>
      ),
    },
  ];
};
