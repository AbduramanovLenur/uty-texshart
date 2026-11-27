---
name: code-review
description: Comprehensive quality control checklist for React 19, TypeScript 6, FSD boundaries, and Ant Design code review.
---

# Code Review & Quality Checklist

При проверке или генерации любого кода в проекте проверяются следующие обязательные пункты:

### 1. TypeScript & Erasable Syntax
- [ ] **Никаких `enum`**: везде использован `export const Name = { ... } as const;` + `type TName = (typeof Name)[keyof typeof Name]`.
- [ ] **Локализация типов (СТРОГО в папке `types`)**:
  - В папках `constants/`, `config/`, `lib/`, `store/` **запрещено** объявлять `type` или `interface`. Там объявляются только `const` объекты и массивы.
  - Все `type` (включая выведенные из констант `typeof`) и все `interface` обязаны находиться **исключительно в папке `model/types/`** (или `@shared/types`).
- [ ] **Только `interface IProps` внутри компонентов**: Внутри файлов компонентов (`ui/*.tsx`) разрешено объявлять **исключительно интерфейс собственных пропсов в виде `interface IProps`**. Любые другие типы обязаны импортироваться из `model/types/`.
- [ ] **Префиксы**: `T` для типов, `I` для интерфейсов (`IProps`, `IFormValues`, `IState`).
- [ ] **Изолированный импорт типов**: `import type { ... }` (правило `verbatimModuleSyntax`).
- [ ] **Нулевой `any`**: отсутствие неявных и явных `any`.

### 2. Feature-Sliced Design
- [ ] **Импорт только через Public API**: никаких импортов вида `@features/.../ui/...`.
- [ ] **Отсутствие Cross-Slice связей**: слайсы внутри `features`, `entities`, `widgets` не импортируют друг друга напрямую.
- [ ] **Минимальный Public API в `index.ts` (Information Hiding)**: Через `index.ts` реэкспортируется **ТОЛЬКО то, что реально используется вовне** (для модалок: компонент для монтирования, `reducer` для `rootStore` и экшен `open`). Все внутренние типы форм (`IFormValues`), локальные константы полей, селекторы (`stateModal`) и функции валидации, нужные только этому слайсу, **НЕ добавляются в `index.ts`**.

### 3. Обработчики действий и управление стейтом (Универсальное правило `handle...`)
- [ ] **Тотальный запрет инлайн-логики и изменения стейта в JSX**:
  - Это правило распространяется **на любые компоненты и события без исключений**: Input, Button, Modal, Table, Tabs, Select, Switch, Checkbox, Dropdown, Paginator, кастомные виджеты, карточки, строки таблиц и т.д.
  - Категорически запрещены любые анонимные функции и вызовы стейта прямо в JSX:
    - ❌ `<Tabs onChange={(key) => setActiveTab(key)} />`
    - ❌ `<Modal onCancel={() => setIsOpen(false)} />`
    - ❌ `<Select onSelect={(val) => setSelectedRole(val)} />`
    - ❌ `<Table onRow={(record) => ({ onClick: () => selectRow(record) })} />`
    - ❌ `<Switch onChange={(checked) => setStatus(checked)} />`
    - ❌ `<Button onClick={() => dispatch(open())} />`
- [ ] **Принцип: «Сначала функция `handle...` — затем использование»**:
  - Любое изменение стейта (`setState`, `dispatch`), навигация (`navigate`), сброс форм (`form.resetFields()`) или запуск процессов **обязаны сначала объявляться в именованной функции с префиксом `handle...`**:
    - `handleTabChange`, `handleModalClose`, `handleRoleSelect`, `handleRowClick`, `handleStatusToggle`, `handleSearchChange`, `handlePageChange`, `handleSubmit`, `handleReset`
  - Внутри `handle...` функции пишется обновление стейта и вся сопутствующая логика.
  - В разметку JSX передаётся **строго ссылка на функцию**:
    - ✅ `<Tabs activeKey={activeTab} onChange={handleTabChange} />`
    - ✅ `<Modal open={isOpen} onCancel={handleModalClose} />`
    - ✅ `<Select value={role} onChange={handleRoleSelect} />`
    - ✅ `<Switch checked={status} onChange={handleStatusToggle} />`

### 4. Ant Design Forms & Modals
- [ ] **Имя поля строго через константу**: `<Item name={FormFields.NAME}>` вместо строки.
- [ ] **Модалка подключена к Redux**: открывается через `open()`, селектор `stateModal`, зарегистрирована в `rootStore.ts`.
- [ ] **Сброс формы**: в `handleClose` вызван `form.resetFields()`.
- [ ] **Свойства `<Modal>`**: присутствуют `destroyOnHidden`, `centered`, `classNames={{ body: cn('form-body') }}`.

### 5. Стилизация и форматирование
- [ ] **Одинарные кавычки**: в JS/TS и в JSX (`type='primary'`).
- [ ] **BEM селекторы**: в `.module.scss` классы названы по BEM (`__`, `--`).
- [ ] **Использование `cn`**: все классы в JSX обернуты в `cn(styles['...'])` или глобальные утилиты `cn('modal')`.
- [ ] **Объектный синтаксис `cn` для условий**: вместо тернарных операторов внутри `cn(...)` используется объектная форма:
  - ❌ ЗАПРЕЩЕНО: `className={cn(styles['status'], isActive ? styles['status--active'] : styles['status--disabled'])}`
  - ✅ ПРАВИЛЬНО: `className={cn(styles['status'], { [styles['status--active']]: isActive, [styles['status--disabled']]: !isActive })}`
- [ ] **Многострочные запятые**: `comma-dangle: 'always-multiline'`.

### 6. Интернационализация
- [ ] **Отсутствие хардкода текстов**: все пользовательские строки обернуты в `t('...')`.
