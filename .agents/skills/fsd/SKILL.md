---
name: fsd
description: Strict Feature-Sliced Design architecture, public API boundaries, slice anatomy, and layer hierarchy rules.
---

# Feature-Sliced Design (FSD) Standards

Проект следует строгой методологии FSD, контролируемой через `eslint-plugin-boundaries`.

## 1. Иерархия слоев (Layer Hierarchy)
Импорты разрешены **только сверху вниз**:
```
app          # Глобальные провайдеры, роутер, rootStore, стили
 └── pages   # Страничные компоненты и роуты
      └── widgets     # Крупные композиционные блоки (таблицы, хедер, сайдбар)
           └── features    # Пользовательские сценарии (модалки, фильтры, действия)
                └── entities    # Бизнес-сущности (user, application, role)
                     └── shared      # Переиспользуемый базис (ui, lib, config, assets)
```
*Слой `shared` не может импортировать ничего из вышестоящих слоев.*

## 2. Запрет Cross-Slice импортов
Слайсы одного и того же слоя **не могут импортировать друг друга**:
- `widgets/applications` **не может** импортировать из `widgets/sidebar`.
- `features/create-user-modal` **не может** импортировать из `features/assign-employee-modal`.
- Если логику нужно разделить между двумя фичами, она выносится ниже — в `entities` или `shared`.

## 3. Правило Public API (`index.ts`)
Любой импорт в другой слайс разрешен **только через корневой `index.ts`** целевого слайса.
```ts
// ПРАВИЛЬНО:
import { UserDetailsCard, type IUserDetails } from '@entities/user';
import { CreateUserModal, open as openCreateUserModal } from '@features/create-user-modal';

// СТРОГО ЗАПРЕЩЕНО (линтер выдаст ошибку):
import UserDetailsCard from '@entities/user/ui/user-details-card';
import { reducer } from '@features/create-user-modal/model/store/slice';
```

### Принцип минимального Public API (Strict Information Hiding)
В `index.ts` реэкспортируется **ТОЛЬКО то, что действительно используется вовне**:
- **Для модальных фич**: наружу отдаются только компонент (для монтирования на странице/виджете), `reducer` (для `rootStore.ts`) и экшен `open` (для кнопок открытия):
  ```ts
  export { default as CreateRoleModal } from './ui/create-role-modal';
  export { reducer, open } from './model/store/slice';
  ```
- **Запрет экспорта внутренних деталей**: если тип формы (`IFormValues`), константы полей (`FormFields`), локальный стейт (`IState`), селекторы (`stateModal`) или функции валидации нужны только внутри самого слайса — **их категорически запрещено выносить в `index.ts`**! Не засорять Public API вещами, которые внешнему миру не нужны.

## 4. Анатомия любого слайса
Внутри каждого слайса (фичи, сущности или виджета) соблюдается четкая структура:
```text
<slice-name>/
├── index.ts               # Public API: реэкспорт UI компонентов, редюсеров, типов
├── model/                 # Бизнес-логика, типы, стор, константы, моки
│   ├── constants/         # Константы перечислений через as const (form-fields.ts, action-keys.ts)
│   ├── config/            # Конфигурационные словари и опции (permissions-config.ts)
│   ├── types/             # Интерфейсы и типы (form.ts, state.ts, user.ts)
│   ├── store/             # Redux Toolkit слайс (slice.ts)
│   ├── lib/               # Библиотека вспомогательного кода слайса:
│   │   ├── hooks/         # Локальные React-хуки слайса (use-leave-confirm.ts, use-role-permissions.ts)
│   │   ├── helpers/       # Функции-помощники и валидаторы форм (validators.ts)
│   │   └── utils/         # Чистые утилиты и фильтрация (filter-actions.ts, get-breadcrumbs.ts)
│   └── mock.ts            # Локальные мок-данные слайса и simulateAsync
└── ui/                    # Компоненты и стили
    ├── <slice-name>.tsx   # Разрешён только `interface IProps`!
    └── <slice-name>.module.scss
```

> **Правило типов в FSD**: Все типы предметной области, моделей, форм и стейта объявляются **исключительно в `model/types/`** (или `@shared/types`). Внутри файлов компонентов `ui/<name>.tsx` разрешено объявлять только собственный `interface IProps`. Любые другие типы в `ui/` запрещены.
