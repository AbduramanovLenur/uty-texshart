import type { TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { TFilterKey } from '../model/types/filters';
import { FilterKeys } from '../model/constants/filter-keys';

import { TableDateRangeFilter } from '@features/table-date-range-filter';
import { TableSearchFilter } from '@features/table-search-filter';
import type { IPayment } from '@entities/payment';
import { routes } from '@shared/config';
import type { TTableFilterState } from '@shared/types';
import { getSortOrder } from '@shared/utils';

export const useGetColumns = (filters: TTableFilterState<TFilterKey>): TableProps<IPayment>['columns'] => {
  const { t } = useTranslation();

  return [
    {
      title: t('headers.paymentId'),
      key: FilterKeys.PAYMENT_ID,
      width: 325,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.PAYMENT_ID),
      filteredValue: filters.paymentId,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <TableSearchFilter
          setSelectedKeys={setSelectedKeys}
          selectedKeys={selectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
          placeholder={t('placeholders.paymentId')}
          clearLabel={t('placeholders.clear')}
          searchLabel={t('placeholders.search')}
        />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
      render: (_, record) => record.idText,
    },
    {
      title: t('headers.invoice'),
      key: FilterKeys.INVOICE_ID,
      width: 200,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.INVOICE_ID),
      filteredValue: filters.invoiceId,
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
      render: (_, record) => record.invoiceText,
    },
    {
      title: t('headers.applicationId'),
      key: FilterKeys.APPLICATION_ID,
      width: 325,
      sorter: true,
      sortOrder: getSortOrder(filters, FilterKeys.APPLICATION_ID),
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
      render: (_, record) => (
        <Link className='table-trigger' to={routes.SINGLE_APPLICATION(record.idText)}>
          {record.idText}
        </Link>
      ),
    },
    {
      title: t('headers.date'),
      key: FilterKeys.DATE,
      minWidth: 200,
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
      render: (_, record) => record.date,
    },
  ];
};
