import { useState, type FC } from 'react';
import { Typography, Button, Table, Tag, type TableProps } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { getColumns } from './columns';
import type { IApplication } from './columns';

import { defaultValues } from '@shared/config';
import { Paginator } from '@shared/ui';
import type { TFilterKey, TTableFilters } from '@shared/types';
import { IconDownload, IconPlus } from '@shared/assets';

import styles from './user-applications.module.scss';

const { Title } = Typography;

const UserApplications: FC = () => {
  const { t: translate } = useTranslation();
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

  const dataSource: IApplication[] = [
    {
      key: '1',
      id: 'ARZ-0142',
      network: 'Elektr kabeli (yer osti)',
      peregon: 'Keles — Chuqursoy',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-cyan)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.accepted')}
        </Tag>
      ),
      date: '05.12.2025, 14:30',
      updatedAt: '12.11.2026, 16:45',
    },
    {
      key: '2',
      id: 'ARZ-0923',
      network: 'Havo elektr uzatish liniyasi',
      peregon: 'Jomiy — Pushkin',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-magenta)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.forwarded')}
        </Tag>
      ),
      date: '27.05.2023, 13:50',
      updatedAt: '15.08.2024, 12:50',
    },
    {
      key: '3',
      id: 'ARZ-0587',
      network: 'Gaz quvuri',
      peregon: 'Keles — Chuqursoy',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-orange-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.actCreated')}
        </Tag>
      ),
      date: '22.02.2028, 11:45',
      updatedAt: '18.09.2027, 14:15',
    },
    {
      key: '4',
      id: 'ARZ-1345',
      network: 'Suv quvuri',
      peregon: 'Keles — Chuqursoy',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-blue-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.technicalConditionsIssued')}
        </Tag>
      ),
      date: '04.08.2028, 10:10',
      updatedAt: '22.04.2029, 08:40',
    },
    {
      key: '5',
      id: 'ARZ-0761',
      network: 'Kanalizatsiya quvuri',
      peregon: 'Keles — Chuqursoy',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-red-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.rejected')}
        </Tag>
      ),
      date: '15.01.2027, 09:15',
      updatedAt: '07.03.2025, 10:30',
    },
    {
      key: '6',
      id: 'ARZ-0482',
      network: 'Issiqlik tarmog\'i',
      peregon: 'Keles — Chuqursoy',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-tag-default-bg)',
            color: 'var(--dark-88)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.draft')}
        </Tag>
      ),
      date: '12.04.2026, 08:00',
      updatedAt: '05.05.2026, 11:20',
    },
    {
      key: '7',
      id: 'ARZ-0910',
      network: 'Aloqa kabeli (mis)',
      peregon: 'Jomiy — Pushkin',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-cyan-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.accepted')}
        </Tag>
      ),
      date: '19.07.2023, 21:35',
      updatedAt: '10.10.2025, 19:30',
    },
    {
      key: '8',
      id: 'ARZ-0678',
      network: 'Optik tolali aloqa kabeli',
      peregon: 'Jomiy — Pushkin',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-cyan-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.accepted')}
        </Tag>
      ),
      date: '11.09.2025, 15:25',
      updatedAt: '30.06.2026, 13:15',
    },
    {
      key: '9',
      id: 'ARZ-1234',
      network: 'Optik tolali aloqa kabeli',
      peregon: 'Jomiy — Pushkin',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-blue-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.technicalConditionsIssued')}
        </Tag>
      ),
      date: '23.10.2026, 17:40',
      updatedAt: '14.02.2027, 15:55',
    },
    {
      key: '10',
      id: 'ARZ-0456',
      network: 'Neft / neft mahsulotlari quvuri',
      peregon: 'Jomiy — Pushkin',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-purple-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.constructionStarted')}
        </Tag>
      ),
      date: '28.11.2024, 12:05',
      updatedAt: '09.11.2025, 11:10',
    },
    {
      key: '11',
      id: 'ARZ-0987',
      network: 'Boshqa muhandislik tarmog\'i',
      peregon: 'Jomiy — Pushkin',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-green-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.completed')}
        </Tag>
      ),
      date: '30.03.2024, 16:00',
      updatedAt: '25.12.2023, 09:00',
    },
    {
      key: '12',
      id: 'ARZ-0321',
      network: 'Aloqa kabeli (mis)',
      peregon: 'Jomiy — Pushkin',
      status: (
        <Tag
          style={{
            backgroundColor: 'var(--ant-blue-6)',
            color: 'var(--ant-color-bg-base)',
            border: 'none',
          }}
        >
          {translate('userApplications.status.technicalConditionsIssued')}
        </Tag>
      ),
      date: '03.06.2022, 18:20',
      updatedAt: '29.01.2023, 17:05',
    },
  ];

  const columns = getColumns(filters, translate);

  return (
    <section className={cn(styles['user-applications'], 'section')}>
      <div className={cn(styles['user-applications__inner'], 'section-inner')}>
        <div className={styles['user-applications__top']}>
          <Title className={styles['user-applications__title']} level={3}>
            {translate('userApplications.title')}
          </Title>
          <Button
            className={styles['user-applications__download']}
            type='default'
            icon={<IconDownload />}
          >
            {translate('userApplications.download')}
          </Button>
          <Button
            className={styles['user-applications__create']}
            type='primary'
            icon={<IconPlus />}
          >
            {translate('userApplications.create')}
          </Button>
        </div>
        <div className={styles['user-applications__body']}>
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
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: 'max-content' }}
            onChange={handleTableChange}
          />
        </div>
        <div className={styles['user-applications__pagination']}>
          <Paginator
            total={total}
            page={filters.page}
            limit={filters.limit}
            onChange={handlePaginationChange}
            summary={translate('userApplications.summary', { count: total })}
          />
        </div>
      </div>
    </section>
  );
};

export default UserApplications;
