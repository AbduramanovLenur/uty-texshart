---
name: react
description: React 19 standards, React Compiler optimization rules, FC typing, component props, and JSX patterns.
---

# React 19 & Component Standards

В проекте используется **React 19** в связке с **React Compiler (`babel-plugin-react-compiler`)**.

## 1. Влияние React Compiler на код
- **Не злоупотреблять ручной мемоизацией**: React Compiler автоматически оптимизирует ререндеры, мемоизируя значения и колбэки в AST.
- Не оборачивать каждую функцию в `useCallback` и каждое вычисление в `useMemo`, если это не требуется для внешних нестабильных зависимостей или сохранения объектной идентичности для нереактивных библиотек.
- Следовать правилам хуков: чистые функции рендера, отсутствие мутаций пропсов и стейта во время рендера.

## 2. Типизация компонентов
- Компоненты объявляются как функциональные с явным указанием `FC<IProps>`.
- **Строгое правило пропсов**: Внутри файла компонента (`ui/*.tsx`) разрешено объявлять **исключительно интерфейс собственных пропсов со строгим именем `interface IProps`**. Все остальные типы (модели данных, формы, стейты) обязательно выносятся в `model/types/` слайса и импортируются.
```tsx
import type { FC, ReactNode } from 'react';
import type { IUser } from '../model/types/user';
import cn from 'classnames';
import styles from './my-component.module.scss';

// В компоненте разрешён ТОЛЬКО IProps:
interface IProps {
  user?: IUser;
  className?: string;
  actionSlot?: ReactNode;
  children?: ReactNode;
}

const MyComponent: FC<IProps> = ({ user, className, actionSlot, children }) => {
  return (
    <div className={cn(styles['my-component'], className)}>
      {actionSlot}
      {children}
    </div>
  );
};

export default MyComponent;
```

## 3. JSX Форматирование
- **Одинарные кавычки в JSX**: `type='primary'`, `layout='vertical'`, `size='large'` (правило `jsx-quotes: prefer-single`).
- **Стилизация через `classnames` (`cn`)**: все классы оборачиваются в `cn(...)`.
- **Запрет массивов индексов в качестве ключей**: `@eslint-react/no-array-index-key`.
- **Деструктуризация хуков**:
  ```tsx
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ```

## 4. Обработчики действий и стейта (Универсальное правило `handle...`)
- **Тотальный запрет инлайн-действий в JSX**:
  - Правило распространяется на **абсолютно любые компоненты и события** (Tabs, Select, Modal, Table, Switch, Checkbox, Paginator, Input, Button, кастомные оверлеи и т.д.).
  - Запрещено вызывать изменение стейта (`setState`, `dispatch`, `navigate`) напрямую в пропсах.
- **Принцип: «Сначала функция `handle...` — затем использование»**:
  - Всегда сначала объявляется именованная функция с префиксом `handle...`, внутри неё пишется логика обновления стейта, а затем функция передаётся в пропс.
  ```tsx
  // 1. Сначала объявляем функции-обработчики
  const handleTabChange = (activeKey: string) => {
    setActiveTab(activeKey);
  };

  const handleRoleSelect = (value: string) => {
    setSelectedRole(value);
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleStatusToggle = (checked: boolean) => {
    setIsActive(checked);
  };

  // 2. В JSX передаем только чистые ссылки на функции
  return (
    <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange} />
      <Select value={selectedRole} onChange={handleRoleSelect} />
      <Switch checked={isActive} onChange={handleStatusToggle} />
      <Modal open={isOpen} onCancel={handleModalClose} />
    </div>
  );
  ```
