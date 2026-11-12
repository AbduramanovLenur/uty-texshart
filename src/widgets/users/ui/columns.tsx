import type { TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { FilterKeys } from '../model/constants/filter-keys';
import type { TFilterKey } from '../model/types/filters';

import { TableSearchFilter } from '@features/table-search-filter';
import { UserStatusTag, type IUserTableRow } from '@entities/user';
import type { TTableFilterState } from '@shared/types';
import { getSortOrder, maskPinfl } from '@shared/utils';

export const useGetColumns = (filters: TTableFilterState<TFilterKey>): TableProps<IUserTableRow>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('headers.user'),
      key: FilterKeys.USER,
      minWidth: 200,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.USER),
      render: (_, record) => (
        <button type='button' className='table-trigger'>
          {record.name}
        </button>
      ),
      filteredValue: filters.user,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.user')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
    },
    {
      title: t('headers.role'),
      key: FilterKeys.ROLE,
      width: 165,
      render: (_, record) => record.role,
      filteredValue: filters.role,
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
      title: t('headers.userMtu'),
      key: FilterKeys.MTU,
      width: 190,
      render: (_, record) => record.mtu,
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
      title: t('headers.pinfl'),
      key: FilterKeys.PINFL,
      minWidth: 165,
      render: (_, record) => maskPinfl(record.pinfl),
      filteredValue: filters.pinfl,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.pinfl')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
    },
    {
      title: t('headers.status'),
      key: FilterKeys.STATUS,
      width: 165,
      render: (_, record) => <UserStatusTag status={record.status} />,
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
      title: t('headers.lastLogin'),
      key: FilterKeys.LAST_LOGIN,
      minWidth: 165,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.LAST_LOGIN),
      render: (_, record) => record.lastLogin,
      filteredValue: filters.lastLogin,
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
  ];
};
