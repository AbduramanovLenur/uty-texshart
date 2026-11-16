import type { TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FilterKeys } from '../model/constants/filter-keys';
import type { TFilterKey } from '../model/types/filter';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { CommunicationRegisterStatusTag, type ICommunicationRegister } from '@entities/communication-register';
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
      filters: dummyCatalogFilters,
      filterSearch: true,
      render: (_, record) => <CommunicationRegisterStatusTag status={record.status} />,
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
