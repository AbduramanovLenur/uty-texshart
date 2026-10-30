import type { ReactNode } from 'react';
import type { TableProps } from 'antd';
import type { TFunction } from 'i18next';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { filterKeys, routes } from '@shared/config';
import type { TTableFilters } from '@shared/types';
import { getSortOrder } from '@shared/utils';
import { IconRetry } from '@shared/assets';

export interface IApplication {
  key: string;
  id: string;
  network: string;
  peregon: string;
  status: ReactNode;
  date: string;
  updatedAt: string;
}

export const getColumns = (filters: TTableFilters, translate: TFunction): TableProps<IApplication>['columns'] => [
  {
    title: translate('userApplications.columns.applicationId'),
    key: filterKeys.APPLICATION_ID,
    width: 160,
    sorter: true,
    sortOrder: getSortOrder(filters, filterKeys.APPLICATION_ID),
    render: (_, record) => (
      <Link className='table-link' to={routes.SINGLE_APPLICATION(record.id)}>
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
        placeholder={translate('userApplications.filters.applicationIdPlaceholder')}
        clearLabel={translate('userApplications.filters.clear')}
        searchLabel={translate('userApplications.filters.search')}
      />
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
    ),
  },
  {
    title: translate('userApplications.columns.network'),
    key: filterKeys.NETWORK,
    minWidth: 235,
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
    title: translate('userApplications.columns.peregon'),
    key: filterKeys.PEREGON,
    minWidth: 250,
    render: (_, record) => record.peregon,
    filteredValue: filters.peregon,
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
    title: translate('userApplications.columns.status'),
    key: filterKeys.STATUS,
    width: 160,
    render: (_, record) => record.status,
    filteredValue: filters.status,
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
    title: translate('userApplications.columns.dateUpdate'),
    key: filterKeys.DATE,
    width: 200,
    sorter: true,
    sortOrder: getSortOrder(filters, filterKeys.DATE),
    filteredValue: filters.date,
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <TableDateRangeFilter
        setSelectedKeys={setSelectedKeys}
        selectedKeys={selectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
        displayFormat='DD.MM.YYYY'
        valueFormat='YYYY-MM-DD'
        clearLabel={translate('userApplications.filters.clear')}
        searchLabel={translate('userApplications.filters.search')}
      />
    ),
    render: (_, record) => (
      <div className='table-date'>
        <div className='table-date-create'>
          {record.date}
        </div>
        <div className='table-date-update'>
          <IconRetry />
          {record.updatedAt}
        </div>
      </div>
    ),
  },
];
