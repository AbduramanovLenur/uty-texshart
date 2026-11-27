---
name: state-management
description: The 4-Tier State Rule: Redux Toolkit for UI modals, Antd useForm for inputs, URL params for table filters, and local mock domain models.
---

# State Management Architecture (4-Tier State Rule)

Для сохранения чистоты и производительности архитектура приложения строго разделяет 4 независимых уровня стейта:

```
┌────────────────────────────────────────────────────────┐
│ 1. Global UI State (Redux Toolkit)                     │
│    - Видимость модалок (isOpen, activeId)              │
│    - Глобальный сайдбар, уведомления                   │
├────────────────────────────────────────────────────────┤
│ 2. Form State (Ant Design useForm)                     │
│    - Текущие значения инпутов                          │
│    - Ошибки валидации, dirty / touched флаги           │
├────────────────────────────────────────────────────────┤
│ 3. URL State (useQueryParams - React Router)           │
│    - Фильтры таблиц, пагинация (page, limit)           │
│    - Поисковые запросы, активные вкладки               │
├────────────────────────────────────────────────────────┤
│ 4. Domain Data (Mock Models & Services)                │
│    - Сущности и списки данных (mock.ts)                │
│    - Симуляция ответов сервера (simulateAsync)         │
└────────────────────────────────────────────────────────┘
```

## Главные антипаттерны:
1. **НЕ сохранять ввод пользователя в Redux** на каждый `onChange`. Форма живет в инстансе `useForm`. В Redux отправляется только готовый результат или ID сущности при открытии.
2. **НЕ хранить фильтры таблиц в `useState`**. Страница с фильтром должна быть ссылочной (Single Source of Truth в URL). Если перезагрузить страницу, фильтры должны восстановиться из параметров URL (`?search=foo&page=2`).

## Работа с URL State через `useQueryParams`:
```tsx
import { useQueryParams } from '@shared/lib';
import { queries } from '@shared/config';

export const UsersTable: FC = () => {
  const { get, setMany } = useQueryParams();

  const currentPage = Number(get(queries.PAGE)) || 1;
  const currentSearch = get(queries.SEARCH) || '';

  const handleSearchChange = (value: string) => {
    setMany({
      [queries.SEARCH]: value || null, // null удаляет ключ из URL
      [queries.PAGE]: 1,               // Сброс страницы при новом поиске
    });
  };

  return <Input value={currentSearch} onChange={(e) => handleSearchChange(e.target.value)} />;
};
```
