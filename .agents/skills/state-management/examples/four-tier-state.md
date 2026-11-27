# Пример разделения 4 уровней состояния (4-Tier State)

В примере показано, как в одном виджете правильно сосуществуют все 4 уровня состояния без антипаттернов.

```tsx
import type { FC } from 'react';
import { Table, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// Уровень 1: Global UI State (Redux) для модалки
import { open as openCreateModal, stateModal } from '@features/create-user-modal';

// Уровень 3: URL State для фильтров и пагинации
import { useQueryParams } from '@shared/lib';
import { queries } from '@shared/config';

// Уровень 4: Domain Data (локальные мок-данные)
import { mockUsersList } from '../model/mock';
import { getColumns } from './columns';

export const UsersManagementWidget: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // 1. Чтение Global UI State из Redux
  const { isOpen } = useSelector(stateModal);

  // 2. Чтение и синхронизация URL State (Single Source of Truth)
  const { get, setMany } = useQueryParams();
  const currentPage = Number(get(queries.PAGE)) || 1;
  const currentSearch = get(queries.SEARCH) || '';

  // 3. Обработчик изменения фильтра через URL
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMany({
      [queries.SEARCH]: e.target.value || null, // null удаляет ключ из URL
      [queries.PAGE]: 1,                         // Сброс на 1 страницу
    });
  };

  // 4. Обработчик открытия модалки через Redux
  const handleOpenCreateModal = () => {
    dispatch(openCreateModal());
  };

  const columns = getColumns(t);

  return (
    <div>
      <div className='toolbar'>
        {/* Поиск управляет URL, а не локальным useState */}
        <Input
          value={currentSearch}
          placeholder={t('placeholders.search')}
          onChange={handleSearchChange}
        />
        <Button type='primary' onClick={handleOpenCreateModal}>
          {t('actions.create')}
        </Button>
      </div>

      {/* Таблица отображает данные из Domain Model */}
      <Table
        rowKey='id'
        columns={columns}
        dataSource={mockUsersList}
        pagination={false}
      />
    </div>
  );
};
```
