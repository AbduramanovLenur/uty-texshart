import type { FC, ReactNode } from 'react';
import { Typography, Button, Table, Tag, Input, DatePicker } from 'antd';
import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';
import dayjs, { type Dayjs } from 'dayjs';
import { SearchOutlined } from '@ant-design/icons';

import { Paginator } from '@shared/ui';
import { useQueryParams } from '@shared/lib';
import { queries } from '@shared/config';

import styles from './user-applications.module.scss';
import type { FilterDropdownProps } from 'antd/es/table/interface';

const { Title } = Typography;
const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

interface IApplication {
  key: string;
  id: string;
  network: string;
  peregon: string;
  status: ReactNode;
  date: string;
  updatedAt: string;
}

const UserApplications: FC = () => {
  const total = 125;

  const { getAll, setMany } = useQueryParams();

  const applicationIdFilters = getAll(queries.APPLICATION_ID);
  const networkFilters = getAll(queries.NETWORK);
  const peregonFilters = getAll(queries.PEREGON);
  const statusFilters = getAll(queries.STATUS);
  const dateFilters = getAll(queries.DATE);

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
          Qabul qilindi
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
          Yo’naltirildi
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
          Dalolatnoma tuzildi
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
          Texnik-shart berildi
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
          Rad etildi
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
          Qoralama
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
          Qabul qilindi
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
          Qabul qilindi
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
          Texnik-shart berildi
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
          Qurilish boshlandi
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
          Yakunlandi
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
          Texnik-shart berildi
        </Tag>
      ),
      date: '03.06.2022, 18:20',
      updatedAt: '29.01.2023, 17:05',
    },
  ];

  const columns: TableProps<IApplication>['columns'] = [
    {
      title: 'Ariza ID',
      key: 'applicationId',
      width: 160,
      render: (_, record) => (
        <Link className={styles['user-applications__table-link']} to=''>
          {record.id}
        </Link>
      ),
      filteredValue: applicationIdFilters,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div className={styles['user-applications__table-search-wrapper']}>
          <Input
            className={styles['user-applications__table-search-input']}
            placeholder='Hujjat ID raqamini kiriting'
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ display: 'block' }}
          />
          <div className={styles['user-applications__table-search-buttons']}>
            <Button
              onClick={() => {
                clearFilters?.();
                confirm();
              }}
              size='small'
              style={{ width: 90 }}
            >
              Tozalash
            </Button>
            <Button
              type='primary'
              onClick={() => confirm()}
              icon={<SearchOutlined />}
              size='small'
              style={{ width: 90 }}
            >
              Qidirish
            </Button>
          </div>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? 'var(--ant-blue)' : undefined }} />
      ),
    },
    {
      title: 'Tarmoq',
      key: 'network',
      minWidth: 240,
      render: (_, record) => record.network,
      filteredValue: networkFilters,
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
      key: 'peregon',
      width: 290,
      render: (_, record) => record.peregon,
      filteredValue: peregonFilters,
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
      key: 'status',
      width: 160,
      render: (_, record) => record.status,
      filteredValue: statusFilters,
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
      key: 'date',
      width: 200,
      filteredValue: dateFilters,
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        const [from, to] = selectedKeys as string[];

        return (
          <div className={styles['user-applications__table-range-wrapper']}>
            <RangePicker
              className={styles['user-applications__table-range-picker']}
              format='DD.MM.YYYY'
              value={from && to ? [dayjs(from), dayjs(to)] : null}
              onChange={() => handleDateRangeChange(setSelectedKeys)}
            />
            <div className={styles['user-applications__table-range-buttons']}>
              <Button
                onClick={() => {
                  clearFilters?.();
                  confirm();
                }}
                size='small'
              >
                Tozalash
              </Button>
              <Button
                type='primary'
                onClick={() => confirm()}
                icon={<SearchOutlined />}
                size='small'
              >
                Qidirish
              </Button>
            </div>
          </div>
        );
      },
      render: (_, record) => (
        <div className={styles['user-applications__table-date']}>
          <div className={styles['user-applications__table-date-create']}>
            {record.date}
          </div>
          <div className={styles['user-applications__table-date-update']}>
            <svg width='12' height='12' viewBox='0 0 12 12'><use href='/images/svg/sprite.svg#icon-retry' /></svg>{record.updatedAt}
          </div>
        </div>
      ),
    },
  ];

  const handleTableChange: TableProps<IApplication>['onChange'] = (_, filters) => {
    setMany({
      [queries.APPLICATION_ID]: filters.applicationId?.map(String),
      [queries.NETWORK]: filters.network?.map(String),
      [queries.PEREGON]: filters.peregon?.map(String),
      [queries.STATUS]: filters.status?.map(String),
      [queries.DATE]: filters.date?.map(String),
    });
  };

  const handleDateRangeChange = (setSelectedKeys: FilterDropdownProps['setSelectedKeys']) => (dates: RangeValue) => {
    if (dates?.[0] && dates?.[1]) {
      setSelectedKeys([
        dates[0].format('YYYY-MM-DD'),
        dates[1].format('YYYY-MM-DD'),
      ]);
      return;
    }

    setSelectedKeys([]);
  };

  return (
    <section className={styles['user-applications']}>
      <div className={styles['user-applications__inner']}>
        <div className={styles['user-applications__top']}>
          <Title className={styles['user-applications__title']} level={3}>
            Arizalarim
          </Title>
          <Button
            className={styles['user-applications__download']}
            type='default'
            icon={
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
              >
                <use href='/images/svg/sprite.svg#icon-download' />
              </svg>
            }
          >
            Yuklab olish
          </Button>
          <Button
            className={styles['user-applications__create']}
            type='primary'
            icon={
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
              >
                <use href='/images/svg/sprite.svg#icon-plus' />
              </svg>
            }
          >
            Yangi ariza yaratish
          </Button>
        </div>
        <Table<IApplication>
          classNames={{
            root: styles['user-applications__table'],
            header: {
              cell: styles['user-applications__table-header-cell'],
            },
            body: {
              row: styles['user-applications__table-body-row'],
            },
          }}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: 'max-content' }}
          onChange={handleTableChange}
        />
        <Paginator total={total} summary={`${total} ta ariza topildi`} />
      </div>
    </section>
  );
};

export default UserApplications;
