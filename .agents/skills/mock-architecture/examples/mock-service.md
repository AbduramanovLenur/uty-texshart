# Пример организации мок-модели и симуляции асинхронности

### 1. Файл данных (`model/mock.ts`)
```ts
import type { IUser } from './types/user';

export const mockUsersList: IUser[] = [
  {
    id: '1',
    name: 'Enterprise Corp',
    inn: '34556546',
    director: 'Alexander Ivanov',
    phone: '+1 555 123 4567',
    address: 'City Center, Main Street 44/12',
  },
  {
    id: '2',
    name: 'Global Logistic Ltd',
    inn: '98765432',
    director: 'Elena Petrova',
    phone: '+1 555 987 6543',
    address: 'Industrial Zone, Block B 10/1',
  },
];
```

### 2. Симуляция запроса с задержкой (`simulateAsync`)
```ts
export const simulateAsync = <T>(data: T, delayMs: number = 800): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });
};
```

### 3. Использование в компоненте для тестирования состояний загрузки
```tsx
import { useState } from 'react';
import { Button, Spin, message } from 'antd';
import { simulateAsync } from '../model/mock';

export const MockActionBlock: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSimulatedSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await simulateAsync({ status: 'SUCCESS' }, 1000);
      message.success('Операция успешно завершена!');
      console.log('Result:', response);
    } catch {
      message.error('Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? <Spin /> : <Button onClick={handleSimulatedSubmit}>Запустить симуляцию</Button>}
    </div>
  );
};
```
