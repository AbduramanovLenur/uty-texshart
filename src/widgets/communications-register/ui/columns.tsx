import type { TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FilterKeys } from '../model/constants/filter-keys';
import type { TFilterKey } from '../model/types/filter';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { type ICommunicationRegister } from '@entities/communication-register';
import { StatusTag } from '@shared/ui';
import { Statuses } from '@shared/config';
import type { TTableFilterState } from '@shared/types';
import { getSortOrder } from '@shared/utils';
import { IconRetry } from '@shared/assets';

const dummyCatalogFilters = [
  { text: 'Catalog 1', value: 'Catalog 1' },
  { text: 'Catalog 2', value: 'Catalog 2' },
  { text: 'Catalog 3', value: 'Catalog 3' },
];

export const useGetColumns = (filters: TTableFilterState<TFilterKey>): TableProps<ICommunicationRegister>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('headers.id'),
      key: FilterKeys.ID,
      width: 165,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.ID),
      filteredValue: filters.id,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.search')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => (
        <button type='button' className={cn('table-trigger')}>
          {record.id}
        </button>
      ),
    },
    {
      title: t('headers.mtu'),
      key: FilterKeys.MTU,
      width: 190,
      filteredValue: filters.mtu,
      filters: dummyCatalogFilters,
      filterSearch: true,
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
    },
    {
      title: t('headers.applicant'),
      key: FilterKeys.APPLICANT,
      minWidth: 165,
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
      render: (_, record) => (
        <button type='button' className={cn('table-trigger')}>
          {record.applicant}
        </button>
      ),
    },
    {
      title: t('headers.network'),
      key: FilterKeys.NETWORK,
      width: 175,
      filteredValue: filters.network,
      filters: dummyCatalogFilters,
      filterSearch: true,
      render: (_, record) => record.network,
    },
    {
      title: t('headers.status'),
      key: FilterKeys.STATUS,
      width: 270,
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
      render: (_, record) => <StatusTag status={record.status} />,
    },
    {
      title: t('headers.dateUpdate'),
      key: FilterKeys.DATE,
      width: 200,
      sorter: true,
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
