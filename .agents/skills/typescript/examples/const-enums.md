# Пример эталонного использования Const-Enums и строгого разделения по папкам

### 1. `model/constants/statuses.ts`
*(В папке constants лежат ТОЛЬКО объекты значений, никаких типов!)*
```ts
export const ApplicationStatuses = {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
} as const;
```

---

### 2. `model/types/status.ts`
*(Все type и interface объявляются ИСКЛЮЧИТЕЛЬНО в папке types!)*
```ts
import type { ApplicationStatuses } from '../constants/statuses';

// Вывод union-типа из объекта констант
export type TApplicationStatus = (typeof ApplicationStatuses)[keyof typeof ApplicationStatuses];

// Интерфейс конфигурации бейджа статуса
export interface IStatusConfig {
  bg: string;
  color: string;
  borderColor: string;
  labelKey: string;
}
```

---

### 3. `model/config/status-config.ts`
*(В папке config лежит конфигурационный объект, импортирующий типы из types!)*
```ts
import { ApplicationStatuses } from '../constants/statuses';
import type { TApplicationStatus, IStatusConfig } from '../types/status';

export const statusConfigMap: Record<TApplicationStatus, IStatusConfig> = {
  [ApplicationStatuses.DRAFT]: {
    bg: 'var(--ant-tag-default-bg)',
    color: 'var(--dark-88)',
    borderColor: 'var(--ant-tag-default-border)',
    labelKey: 'statuses.draft',
  },
  [ApplicationStatuses.SUBMITTED]: {
    bg: 'var(--ant-geekblue-1)',
    color: 'var(--ant-geekblue-7)',
    borderColor: 'var(--ant-geekblue-3)',
    labelKey: 'statuses.submitted',
  },
  [ApplicationStatuses.ACCEPTED]: {
    bg: 'var(--ant-green-1)',
    color: 'var(--ant-green-7)',
    borderColor: 'var(--ant-green-3)',
    labelKey: 'statuses.accepted',
  },
  [ApplicationStatuses.REJECTED]: {
    bg: 'var(--ant-red-1)',
    color: 'var(--ant-red-7)',
    borderColor: 'var(--ant-red-3)',
    labelKey: 'statuses.rejected',
  },
} as const;
```
