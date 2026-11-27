---
name: scss
description: SCSS Modules standards, BEM naming methodology, classnames (cn) helper, global layouts, and Ant Design CSS variables.
---

# SCSS Modules & Styling Standards

В проекте используется связка **SCSS Modules + BEM + classnames (`cn`)**.

## 1. Именование селекторов (BEM)
- Имя корневого класса совпадает с именем компонента в `kebab-case`: `.user-details-card`.
- Элементы именуются через `__`: `.user-details-card__header`, `.user-details-card__item`.
- Модификаторы именуются через `--`: `.user-details-card__item--active`.

```scss
// user-details-card.module.scss
.user-details-card {
  padding: 24px;
  background-color: var(--ant-color-bg-container);
  border-radius: 8px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
  }
}
```

## 2. Использование утилиты `classnames` (`cn`)
Все классы в JSX оборачиваются в `cn`.

### Базовое связывание:
```tsx
import cn from 'classnames';
import styles from './user-details-card.module.scss';

<div className={cn(styles['user-details-card'], className)}>
  <div className={cn(styles['user-details-card__header'])}>
    <span className={cn(styles['user-details-card__title'])}>Title</span>
  </div>
</div>
```

### Условные классы и модификаторы (Объектный синтаксис):
Никаких тернарных операторов вида `isActive ? styles['...'] : styles['...']` внутри `cn`!
Для условий всегда используется **объектный синтаксис `classnames`**:
```tsx
<span
  className={cn(styles['user-details-card__status'], {
    [styles['user-details-card__status--active']]: isActive,
    [styles['user-details-card__status--disabled']]: !isActive,
  })}
>
  {statusText}
</span>
```
```

## 3. Глобальные утилитарные классы (`src/app/styles/`)
Не изобретать повторно верстку страниц и модалок — использовать проектные глобальные классы:
- `cn('section')`, `cn('section-inner')`, `cn('section-single-inner')` — каркас страниц
- `cn('modal')`, `cn('form-body')`, `cn('modal__footer')` — разметка модальных окон
- `cn('create-btn')` — синяя акцентная кнопка добавления
- `cn('breadcrumbs')`, `cn('breadcrumbs__item')` — хлебные крошки

## 4. CSS Переменные Ant Design
Для цветов, рамок и фонов использовать стандартные токены дизайн-системы Ant Design:
- `var(--ant-color-bg-container)`
- `var(--ant-color-border-secondary)`
- `var(--ant-primary-color)`
- `var(--ant-geekblue-1)`, `var(--ant-geekblue-7)`
- `var(--dark-88)`, `var(--dark-45)`
