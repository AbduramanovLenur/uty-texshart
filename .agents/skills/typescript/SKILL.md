---
name: typescript
description: Strict TypeScript 6 standards, erasable syntax rules, const-enums, type naming conventions, and type-only imports.
---

# TypeScript Standards & Conventions

## 1. Запрет TypeScript `enum` (`erasableSyntaxOnly: true`)
В проекте настроен компилятор с `"erasableSyntaxOnly": true`.
- **Категорически запрещено** использовать ключевое слово `enum`. Это вызовет фатальную ошибку компиляции!
- Все перечисления, словари и наборы значений оформляются исключительно через **`as const` объект** + вывод типа через `typeof`.

### Стандарт Const-Enums:
```ts
// 1. model/constants/form-fields.ts
// В файле constants объявляется ТОЛЬКО const объект! Никаких types!
export const FormFields = {
  TITLE: 'title',
  STATUS: 'status',
  DESCRIPTION: 'description',
  FILE: 'file',
} as const;

// 2. model/types/form.ts
// Вывод типа значений и интерфейсы формы объявляются ТОЛЬКО в папке types!
import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IFormValues {
  [FormFields.TITLE]: string;
  [FormFields.STATUS]: string;
}
```

## 2. Соглашение по именованию типов и интерфейсов
- **Префикс `T` для Type Alias (`type`)**:
  - `TStatus`, `TFormField`, `TMenuItem`, `TQueryValue`, `TTableSortOrder`, `TApplicationActionKey`
  - Function types: `type TCloseHandler = () => void;`
  - Union / Primitive types: `type TRangeValue = [Dayjs | null, Dayjs | null];`
- **Префикс `I` для интерфейсов (`interface`)**:
  - `IProps`, `IFormValues`, `IState`, `IOpenPayload`, `IUser`, `IUserDetails`, `IStatusTagConfig`

## 3. Strict Type Imports (`verbatimModuleSyntax: true`)
Все импорты типов обязаны содержать спецификатор `type`. Не смешивать рантайм-импорты и типы в одном утверждении без явного `type`.

```ts
// ПРАВИЛЬНО:
import { useState, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import type { IFormValues } from '../model/types/form';

// ПРАВИЛЬНО:
export type { IFormValues, TFormField } from './model/types/form';

// ЗАПРЕЩЕНО:
import { FC, useState } from 'react';
```

## 4. Качественная типизация без `any`
- Никаких неявных или явных `any` для глушения ошибок компилятора (`@typescript-eslint/no-explicit-any: warn/error`).
- Для неизвестных внешних данных использовать `unknown` с последующим сужением типа (`typeof`, `instanceof`, кастомные type guards).
- Использовать `Record<TKey, TValue>` для конфигурационных словарей, чтобы компилятор гарантировал покрытие всех ключей перечисления.

## 5. Правило локализации типов (Type Locality Rule)
- **Все типы и интерфейсы объявляются СТРОГО в папке `types`**:
  - Внутри фичи / сущности / виджета: `<slice>/model/types/` (например `form.ts`, `state.ts`, `user.ts`, `permission.ts`).
  - Общесистемные типы: `@shared/types/`.
- **Запрет типов в `constants/` и `config/`**:
  - В файлах `constants/` и `config/` объявляются ТОЛЬКО рантайм-значения (объекты `as const` и конфигурационные массивы).
  - Любые `type` и `interface`, которые описывают эти конфигурации или выводятся из них (через `typeof`), **обязаны находиться в папке `types/`** и импортироваться в `config/` через `import type`.
- **В файлах компонентов (`ui/*.tsx`) запрещено объявлять модели данных, формы или стейты**:
  - Нельзя объявлять в `ui/` типы данных, сущностей, состояний или union-перечислений.
- **Единственное исключение внутри компонента — интерфейс собственных пропсов `interface IProps`**:
  - Внутри `.tsx` файла разрешён **только** интерфейс собственных пропсов этого компонента со строгим именем `interface IProps`.
  - Все остальные типы обязательно импортируются:
    ```tsx
    // ui/user-card.tsx
    import type { FC, ReactNode } from 'react';
    // Все типы предметной области импортируются из model/types:
    import type { IUserDetails } from '../model/types/user';

    // В компоненте разрешён ТОЛЬКО интерфейс пропсов IProps:
    interface IProps {
      user?: IUserDetails;
      actionSlot?: ReactNode;
      className?: string;
    }

    export const UserCard: FC<IProps> = ({ user, actionSlot, className }) => {
      // ...
    };
    ```
