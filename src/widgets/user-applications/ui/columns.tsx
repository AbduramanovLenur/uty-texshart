import type { ReactNode } from 'react';
import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { filterKeys } from '@shared/config';
import type { TTableFilters } from '@shared/types';
import { getSortOrder } from '@shared/utils';

import styles from './user-applications.module.scss';

export interface IApplication {
  key: string;
  id: string;
  network: string;
  peregon: string;
  status: ReactNode;
  date: string;
  updatedAt: string;
}

export const getColumns = (filters: TTableFilters): TableProps<IApplication>['columns'] => [
  {
    title: 'Ariza ID',
    key: filterKeys.APPLICATION_ID,
    width: 160,
    sorter: true,
    sortOrder: getSortOrder(filters, filterKeys.APPLICATION_ID),
    render: (_, record) => (
      <Link className={styles['user-applications__table-link']} to=''>
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
        placeholder='Hujjat ID raqamini kiriting'
        clearLabel='Tozalash'
        searchLabel='Qidirish'
      />
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
    ),
  },
  {
    title: 'Tarmoq',
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
    title: 'Peregon',
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
    title: 'Status',
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
    title: 'Sana / Yangilanish',
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
        clearLabel='Tozalash'
        searchLabel='Qidirish'
      />
    ),
    render: (_, record) => (
      <div className={styles['user-applications__table-date']}>
        <div className={styles['user-applications__table-date-create']}>
          {record.date}
        </div>
        <div className={styles['user-applications__table-date-update']}>
          <svg width='12' height='12' viewBox='0 0 12 12'>
            <use href='/images/svg/sprite.svg#icon-retry' />
          </svg>
          {record.updatedAt}
        </div>
      </div>
    ),
  },
];
