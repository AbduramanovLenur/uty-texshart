import type { TableProps } from 'antd';
import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FilterKeys } from '../model/constants/filter-keys';
import { LogStatuses } from '../model/constants/log-statuses';
import { statusTagConfig } from '../model/config/status-tag';
import type { TFilterKey } from '../model/types/filter';
import type { ILogItem } from '../model/types/log';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { StatusTag } from '@shared/ui';
import type { TTableFilterState } from '@shared/types';
import { getSortOrder } from '@shared/utils';

export const useGetColumns = (filters: TTableFilterState<TFilterKey>): TableProps<ILogItem>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: 'N',
      key: 'number',
      width: 90,
      render: (_, record) => record.number,
    },
    {
      title: 'User',
      key: FilterKeys.USER,
      dataIndex: 'user',
      minWidth: 191,
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
      render: (_, record) => (
        <span className={cn('table-trigger')}>
          {record.user}
        </span>
      ),
    },
    {
      title: 'Role',
      key: FilterKeys.ROLE,
      dataIndex: 'role',
      width: 200,
      filteredValue: filters.role,
      filters: [
        { text: 'ECH mutahhassisi', value: 'ECH mutahhassisi' },
        { text: 'Arizachi', value: 'Arizachi' },
        { text: 'Bosh boshqarma', value: 'Bosh boshqarma' },
        { text: 'PCH mutahhassisi', value: 'PCH mutahhassisi' },
      ],
      filterIcon: (filtered: boolean) => (
        <FilterFilled style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => record.role,
    },
    {
      title: 'Status',
      key: FilterKeys.STATUS,
      dataIndex: 'status',
      width: 120,
      filteredValue: filters.status,
      filters: [
        { text: 'View', value: LogStatuses.VIEW },
        { text: 'Create', value: LogStatuses.CREATE },
        { text: 'Modify', value: LogStatuses.MODIFY },
      ],
      filterIcon: (filtered: boolean) => (
        <FilterFilled style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => <StatusTag status={record.status} config={statusTagConfig} />,
    },
    {
      title: 'Details',
      key: 'details',
      minWidth: 260,
      render: (_, record) => (
        <span>
          {record.actionText}{' '}
          {record.targetId && (
            <span className={cn('table-trigger')}>
              {record.targetId}
            </span>
          )}
        </span>
      ),
    },
    {
      title: 'Sana',
      key: FilterKeys.DATE,
      dataIndex: 'date',
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
      filterIcon: (filtered: boolean) => (
        <FilterFilled style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => record.date,
    },
  ];
};
