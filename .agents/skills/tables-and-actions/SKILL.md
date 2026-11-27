---
name: tables-and-actions
description: Ant Design Tables standards, typed columns.tsx, pagination wrappers, custom column filters, and action button panels.
---

# Ant Design Tables & Action Panels

## 1. Типизация колонок таблицы (`columns.tsx`)
Колонки таблицы всегда выносятся в отдельный файл `ui/columns.tsx` и генерируются функцией, принимающей `t` (функцию перевода i18n):

```tsx
// src/widgets/users/ui/columns.tsx
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

## 2. Пагинация через `@shared/ui/paginator`
Не использовать встроенную стандартную пагинацию таблицы Ant Design, если требуется единый проектный стиль. Передавать `pagination={false}` в `<Table>` и размещать компонент `<Paginator>` снизу таблицы:
```tsx
import { Paginator } from '@shared/ui';

<Table columns={columns} dataSource={data} pagination={false} rowKey='id' />
<Paginator total={total} current={page} pageSize={limit} onChange={handlePageChange} />
```

## 3. Панели действий (`application-actions`)
Панели кнопок в карточках или строках таблицы генерируются на основе массива конфигураций (`IAction[]`), что позволяет централизованно фильтровать доступные кнопки по ролям пользователя.

**Тип объявляется в `types/`, а массив — в `config/`**:
```tsx
// 1. model/types/action.ts
export interface IAction {
  key: TActionKey;
  labelKey: string;
  icon?: ReactNode;
  className?: string;
  roles?: Role[];
}

// 2. model/config/actions-config.tsx
import type { IAction } from '../types/action';

export const actionsConfig: IAction[] = [
  // ...
];
```
Клик по кнопке вызывает переданный обработчик `handlers?.[action.key]?.()`.
