---
name: antd-modals
description: Universal modal dialogs architecture, Redux Toolkit slices, global registration, mounting, and triggers.
---

# Ant Design Modals & Redux Architecture

Модальные окна в проекте не используют локальный стейт `useState(false)`. Каждое окно управляется **централизованно через Redux Toolkit**.

## 1. Где создается модальное окно
Все модалки оформляются как фичи в слое `src/features/<name>-modal/`.

## 2. Структура Redux Slice модалки
```ts
// src/features/<name>-modal/model/store/slice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  id: null,
  key: null,
};

const slice = createSlice({
  name: '<name>ModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IOpenPayload | undefined>) => {
      state.isOpen = true;
      state.id = action.payload?.id ?? null;
      state.key = action.payload?.key ?? null;
    },
    close: (state) => {
      state.isOpen = false;
      state.id = null;
      state.key = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;
export const stateModal = (state: { <name>ModalSlice: IState }) => state.<name>ModalSlice;
```

## 3. Регистрация в `src/app/store/rootStore.ts`
Редюсер каждой модалки подключается в `combineReducers`:
```ts
import { reducer as exampleModalReducer } from '@features/example-modal';

const rootReducer = combineReducers({
  exampleModalSlice: exampleModalReducer,
  // ...
});
```

## 4. Обязательные свойства `<Modal>`
1. `destroyOnHidden`: гарантирует уничтожение внутреннего DOM-дерева и сброс состояния при закрытии.
2. `centered`: центрирование окна по вертикали.
3. `className={cn('modal')}` и `classNames={{ body: cn('form-body') }}`.
4. `footer`: кастомный подвал со стандартизированными кнопками:
   - `type='default'` и `className={cn('modal__button-close')}`
   - `type='primary'` и `className={cn('modal__button-confirm')}`

## 5. Правило монтирования и вызова
- **Монтирование**: Модалка размещается в корне виджета или страницы (`<ExampleModal />`), не загромождая дочерние компоненты.
- **Вызов**: Из строки таблицы или кнопки действия отправляется экшен:
  ```ts
  import { open as openExampleModal } from '@features/example-modal';
  dispatch(openExampleModal({ id: record.id }));
  ```
