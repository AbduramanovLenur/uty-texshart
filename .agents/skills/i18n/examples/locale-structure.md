# Пример структуры локализации и использования переводов

### 1. Файл локализации (`src/shared/config/i18n/locales/ru.json`)
```json
{
  "actions": {
    "save": "Сохранить",
    "cancel": "Отмена",
    "create": "Создать",
    "delete": "Удалить"
  },
  "statuses": {
    "active": "Активен",
    "inactive": "Неактивен"
  },
  "userModal": {
    "title": "Новый пользователь",
    "fields": {
      "fullName": "Ф.И.О.",
      "role": "Роль"
    },
    "validation": {
      "fullNameRequired": "Пожалуйста, введите Ф.И.О."
    }
  }
}
```

### 2. Использование хука `useTranslation` в компоненте
```tsx
import type { FC } from 'react';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export const UserCardHeader: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title level={4}>{t('userModal.title')}</Title>
      <Button type='primary'>{t('actions.create')}</Button>
    </div>
  );
};
```
