import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, type TableProps } from 'antd';
import cn from 'classnames';

import { getColumns } from './columns';

import { applicationStatuses, type IApplication } from '@entities/applications';
import { defaultValues } from '@shared/config';
import { Paginator } from '@shared/ui';
import type { TFilterKey, TTableFilters } from '@shared/types';

import styles from './applications-table.module.scss';

const mockApplications: IApplication[] = [
  {
    key: '1',
    id: 'ARZ-0142',
    network: 'Elektr kabeli (yer osti)',
    mtu: 'Toshkent MTU',
    km: '12-5',
    status: applicationStatuses.ACCEPTED,
    date: '05.12.2025, 14:30',
    updatedAt: '12.11.2026, 16:45',
  },
  {
    key: '2',
    id: 'ARZ-0923',
    network: 'Havo elektr uzatish liniyasi',
    mtu: 'Qarshi MTU',
    km: '45-2',
    status: applicationStatuses.FORWARDED,
    date: '27.05.2023, 13:50',
    updatedAt: '15.08.2024, 12:50',
  },
  {
    key: '3',
    id: 'ARZ-0587',
    network: 'Gaz quvuri',
    mtu: 'Buxoro MTU',
    km: '128-4',
    status: applicationStatuses.ACT_CREATED,
    date: '22.02.2028, 11:45',
    updatedAt: '18.09.2027, 14:15',
  },
  {
    key: '4',
    id: 'ARZ-1345',
    network: 'Suv quvuri',
    mtu: 'Qarshi MTU',
    km: '129-8',
    status: applicationStatuses.TECHNICAL_CONDITIONS_ISSUED,
    date: '04.08.2028, 10:10',
    updatedAt: '22.04.2029, 08:40',
  },
  {
    key: '5',
    id: 'ARZ-0761',
    network: 'Kanalizatsiya quvuri',
    mtu: 'Toshkent MTU',
    km: '56-3',
    status: applicationStatuses.REJECTED,
    date: '15.01.2027, 09:15',
    updatedAt: '07.03.2025, 10:30',
  },
  {
    key: '6',
    id: 'ARZ-0482',
    network: "Issiqlik tarmog'i",
    mtu: 'Samarqand MTU',
    km: '78-6',
    status: applicationStatuses.DRAFT,
    date: '12.04.2026, 08:00',
    updatedAt: '05.05.2026, 11:20',
  },
  {
    key: '7',
    id: 'ARZ-0910',
    network: 'Aloqa kabeli (mis)',
    mtu: 'Qarshi MTU',
    km: '98-2',
    status: applicationStatuses.ACCEPTED,
    date: '19.07.2023, 21:35',
    updatedAt: '10.10.2025, 19:30',
  },
  {
    key: '8',
    id: 'ARZ-0678',
    network: 'Optik tolali aloqa kabeli',
    mtu: 'Buxoro MTU',
    km: '112-7',
    status: applicationStatuses.ACCEPTED,
    date: '11.09.2025, 15:25',
    updatedAt: '30.06.2026, 13:15',
  },
  {
    key: '9',
    id: 'ARZ-1234',
    network: 'Optik tolali aloqa kabeli',
    mtu: 'Samarqand MTU',
    km: '34-9',
    status: applicationStatuses.TECHNICAL_CONDITIONS_ISSUED,
    date: '23.10.2026, 17:40',
    updatedAt: '14.02.2027, 15:55',
  },
  {
    key: '10',
    id: 'ARZ-0456',
    network: 'Neft / neft mahsulotlari quvuri',
    mtu: 'Toshkent MTU',
    km: '145-3',
    status: applicationStatuses.CONSTRUCTION_STARTED,
    date: '28.11.2024, 12:05',
    updatedAt: '09.11.2025, 11:10',
  },
  {
    key: '11',
    id: 'ARZ-0987',
    network: "Boshqa muhandislik tarmog'i",
    mtu: 'Qarshi MTU',
    km: '67-1',
    status: applicationStatuses.COMPLETED,
    date: '30.03.2024, 16:00',
    updatedAt: '25.12.2023, 09:00',
  },
  {
    key: '12',
    id: 'ARZ-0321',
    network: 'Aloqa kabeli (mis)',
    mtu: 'Samarqand MTU',
    km: '89-5',
    status: applicationStatuses.TECHNICAL_CONDITIONS_ISSUED,
    date: '03.06.2022, 18:20',
    updatedAt: '29.01.2023, 17:05',
  },
];

const ApplicationTable: FC = () => {
  const { t } = useTranslation();
  const total = 125;

  const [filters, setFilters] = useState<TTableFilters>({
    page: defaultValues.PAGE,
    limit: defaultValues.LIMIT,
  });

  const handleTableChange: TableProps<IApplication>['onChange'] = (_, nextFilters, sorter) => {
    const activeSorter = Array.isArray(sorter) ? sorter[0] : sorter;

    setFilters(({ page, limit }) => ({
      ...nextFilters,
      page,
      limit,
      sortBy: activeSorter?.order ? (activeSorter.columnKey as TFilterKey) : null,
      sortOrder: activeSorter?.order ?? null,
    }));
  };

  const handlePaginationChange = (page: number, limit: number) => {
    setFilters((prev) => ({ ...prev, page, limit }));
  };

  const columns = getColumns(filters, t);

  return (
    <div className={styles['applications-table']}>
      <div className={cn(styles['applications-table__body'], 'scrollbar')}>
        <Table<IApplication>
          classNames={{
            root: 'table',
            header: {
              cell: 'table-header-cell',
            },
            body: {
              row: 'table-body-row',
            },
          }}
          dataSource={mockApplications}
          columns={columns}
          pagination={false}
          scroll={{ x: 'max-content' }}
          onChange={handleTableChange}
        />
      </div>
      <div className={styles['applications-table__pagination']}>
        <Paginator
          total={total}
          page={filters.page}
          limit={filters.limit}
          onChange={handlePaginationChange}
          summary={t('summary', { count: total })}
        />
      </div>
    </div>
  );
};

export default ApplicationTable;
