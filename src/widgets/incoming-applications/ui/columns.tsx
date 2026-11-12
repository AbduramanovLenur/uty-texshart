import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { FilterKeys } from '../model/constants/filter-keys';
import type { TFilterKey } from '../model/types/filters';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import { ApplicationStatusTag, type IIncomingApplication } from '@/entities/application';
import { routes } from '@shared/config';
import type { TTableFilterState } from '@shared/types';
import { getSortOrder } from '@shared/utils';
import { IconRetry } from '@shared/assets';

export const useGetColumns = (
  filters: TTableFilterState<TFilterKey>,
  onApplicantClick?: (record: IIncomingApplication) => void,
  onActionClick?: (record: IIncomingApplication) => void,
): TableProps<IIncomingApplication>['columns'] => {
  const { t } = useTranslation();
  return [
    {
      title: t('headers.applicationId'),
      key: FilterKeys.APPLICATION_ID,
      width: 140,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.APPLICATION_ID),
      render: (_, record) => (
        <Link className='table-trigger' to={routes.SINGLE_APPLICATION(record.id)}>
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
          className='table-trigger'
          type='button'
          onClick={() => onActionClick?.(record)}
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
          className='table-trigger'
          type='button'
          onClick={() => onApplicantClick?.(record)}
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
        <div className='table-info'>
          <div className='table-info-value'>
            {record.mtu}
          </div>
          <div className='table-info-value'>
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
      render: (_, record) => <ApplicationStatusTag status={record.status} />,
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
      title: t('headers.dateUpdate'),
      key: FilterKeys.DATE,
      width: 200,
      sorter: true,
      fixed: 'right',
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
};
