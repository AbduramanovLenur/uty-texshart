# Пример стилизации компонента (SCSS Modules + BEM)

В примере продемонстрированы:
1. Строгий BEM нейминг селекторов (`block__element`, `block__element--modifier`).
2. Использование Ant Design CSS-переменных (`var(--ant-...)`).
3. Связка SCSS-модуля с глобальными классами (`section`, `modal`) через `cn(...)`.

### 1. Файл стилей (`user-profile-card.module.scss`)
```scss
.user-profile-card {
  padding: 24px;
  background-color: var(--ant-color-bg-container);
  border: 1px solid var(--ant-color-border-secondary);
  border-radius: 8px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--ant-color-split);
    padding-bottom: 12px;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: var(--dark-88);
    margin: 0;
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: center;
  }

  &__status {
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 13px;

    &--active {
      background-color: var(--ant-green-1);
      color: var(--ant-green-7);
      border: 1px solid var(--ant-green-3);
    }

    &--disabled {
      background-color: var(--ant-color-fill-tertiary);
      color: var(--dark-45);
    }
  }
}
```

### 2. Использование в JSX
```tsx
import cn from 'classnames';
import styles from './user-profile-card.module.scss';

<div className={cn(styles['user-profile-card'], className)}>
  <div className={cn(styles['user-profile-card__header'])}>
    <h3 className={cn(styles['user-profile-card__title'])}>{title}</h3>
    <span
      className={cn(styles['user-profile-card__status'], {
        [styles['user-profile-card__status--active']]: isActive,
        [styles['user-profile-card__status--disabled']]: !isActive,
      })}
    >
      {statusText}
    </span>
  </div>
</div>
```
