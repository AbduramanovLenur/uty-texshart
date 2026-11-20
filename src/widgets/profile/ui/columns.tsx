import type { TableProps } from 'antd';
import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { FilterKeys } from '../model/constants/filter-keys';
import type { TFilterKey } from '../model/types/filter';
import type { IProfileSession } from '../model/types/session';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { TableTimeFilter } from '@features/table-time-filter';
import type { TTableFilterState } from '@shared/types';

export const useGetColumns = (filters: TTableFilterState<TFilterKey>): TableProps<IProfileSession>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('headers.number'),
      key: 'number',
      dataIndex: 'number',
      width: 140,
      render: (_, record) => record.number,
    },
    {
      title: t('headers.time'),
      key: FilterKeys.TIME,
      dataIndex: 'time',
      width: 355,
      filteredValue: filters.time,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableTimeFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          format='HH:mm'
          placeholder={t('placeholders.time')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <FilterFilled style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => record.time,
    },
    {
      title: t('headers.date'),
      key: FilterKeys.DATE,
      dataIndex: 'date',
      minWidth: 355,
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
    {
      title: t('headers.ipAddress'),
      key: FilterKeys.IP_ADDRESS,
      dataIndex: 'ipAddress',
      minWidth: 200,
      filteredValue: filters.ipAddress,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.ipAddress')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => record.ipAddress,
    },
  ];
};
