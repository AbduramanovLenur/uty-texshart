---
name: mock-architecture
description: Autonomous Mocking Architecture: model/mock.ts, typed collections, and simulateAsync helper for standalone services without backend.
---

# Autonomous Mock Data Architecture

До подключения реального бэкенда каждый модуль, виджет и сервис должны быть **полностью функциональны на мок-данных**.

## 1. Структура `model/mock.ts`
Все мок-данные хранятся внутри папки `model/` соответствующего слайса и строго типизируются интерфейсами из `model/types/`:

```ts
// src/entities/user/model/mock.ts
import type { IUser, IUserDetails } from './types/user';

export const mockUsersList: IUser[] = [
  {
    id: '1',
    name: 'Enterprise Corp',
    inn: '34556546',
    director: 'Alexander Ivanov',
    phone: '+1 555 123 4567',
    address: 'City Center, Main Street 44/12',
  },
];

export const mockUserDetails: IUserDetails = {
  id: '1',
  name: 'Alex Johnson',
  pinfl: '12345678901234',
  fullName: 'Alex Johnson Junior',
  phone: '+1 555 987 6543',
  regionalDepartment: 'Central',
  role: 'Department Lead',
  position: 'Lead Engineer',
  email: 'alex@example.com',
  comment: 'Contact via corporate messenger',
};
```

## 2. Симуляция асинхронных операций (`simulateAsync`)
Чтобы интерфейс отрабатывал состояния загрузки (лоадеры, дизейбл кнопок сабмита, индикаторы `Spin`), используется чистая обертка:

```ts
export const simulateAsync = <T>(data: T, delayMs: number = 800): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });
};
```

Пример вызова в обработчике формы:
```ts
const handleFinish = async (values: IFormValues) => {
  setIsLoading(true);
  try {
    const result = await simulateAsync({ success: true, ...values });
    console.log('Result:', result);
    handleClose();
  } finally {
    setIsLoading(false);
  }
};
```
