# Пример таблицы Ant Design с колонками и пагинацией

### 1. Файл колонок (`ui/columns.tsx`)
```tsx
import type { ColumnsType } from 'antd/es/table';
import type { TFunction } from 'i18next';
import { Tag } from 'antd';
import type { IUser } from '../model/types/user';

export const getColumns = (t: TFunction): ColumnsType<IUser> => [
  {
    title: t('users.columns.id'),
    dataIndex: 'id',
    key: 'id',
    width: 80,
  },
  {
    title: t('users.columns.fullName'),
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: t('users.columns.role'),
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: t('users.columns.status'),
    dataIndex: 'status',
    key: 'status',
    render: (status: boolean) => (
      <Tag color={status ? 'green' : 'red'}>
        {status ? t('statuses.active') : t('statuses.inactive')}
      </Tag>
    ),
  },
];
```

### 2. Подключение таблицы с отдельным Paginator (`ui/users-table.tsx`)
```tsx
import type { FC } from 'react';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import { Paginator } from '@shared/ui';
import type { IUser } from '../model/types/user';
import { getColumns } from './columns';

interface IProps {
  data: IUser[];
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
}

export const UsersTable: FC<IProps> = ({
  data,
  total,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const { t } = useTranslation();
  const columns = getColumns(t);

  const handlePageChange = (page: number, size: number) => {
    onPageChange(page, size);
  };

  return (
    <div>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        pagination={false} // встроенная пагинация отключается
      />
      <Paginator
        total={total}
        current={currentPage}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
};
```
