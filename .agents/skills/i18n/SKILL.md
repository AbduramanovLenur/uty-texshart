---
name: i18n
description: Internationalization standards with react-i18next, nested JSON structures, and zero hardcoded UI strings.
---

# Internationalization (i18n) Standards

## 1. Нулевой строковый хардкод в интерфейсе
Каждая надпись, лейбл формы, плейсхолдер, колонка таблицы или сообщение валидации **обязаны** проходить через функцию перевода `t('...')`.
- Хардкод русских или узбекских текстов в JSX категорически запрещен!

```tsx
// ПРАВИЛЬНО:
const { t } = useTranslation();
<Button type='primary'>{t('actions.save')}</Button>

// ЗАПРЕЩЕНО:
<Button type='primary'>Сохранить</Button>
```

## 2. Структура файлов локализации
Файлы переводов хранятся в:
- `src/shared/config/i18n/locales/ru.json` (Русский)
- `src/shared/config/i18n/locales/uz.json` (Узбекский)

## 3. Иерархия ключей
Ключи группируются по контексту:
- `actions.*`: общие действия (`save`, `cancel`, `confirm`, `delete`, `download`, `retry`)
- `statuses.*`: названия статусов заявки или пользователя
- `<featureOrWidgetName>.*`: ключи, специфичные для конкретного экрана/модалки (`fields.*`, `validation.*`, `placeholders.*`, `title`)

```json
{
  "actions": {
    "save": "Сохранить",
    "cancel": "Отмена"
  },
  "createUserModal": {
    "title": "Создание пользователя",
    "fields": {
      "fullName": "Ф.И.О.",
      "role": "Роль"
    },
    "validation": {
      "fullNameRequired": "Введите Ф.И.О."
    }
  }
}
```
