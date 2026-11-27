---
name: antd-forms
description: Ant Design Forms standards, FormFields binding, useForm hook, validation rules, custom validators, and custom form controls.
---

# Ant Design Forms Standards

## 1. Откуда берётся и как формируется `IFormValues`

Интерфейс значений формы `IFormValues` **всегда создаётся локально внутри слайса фичи или виджета** в папке `model/types/` и формируется по строгому циклу:

```
<slice-folder>/
├── model/
│   ├── constants/
│   │   └── form-fields.ts    # 1. Объект констант полей через as const
│   └── types/
│       └── form.ts           # 2. ЗДЕСЬ ОБЪЯВЛЯЕТСЯ IFormValues
├── ui/
│   └── <name>.tsx            # 3. Использование: import type { IFormValues } from '../model/types/form'
└── index.ts                  # 4. Реэкспорт: export type { IFormValues } from './model/types/form'
```

### Этап 1. Константы полей (`model/constants/form-fields.ts`)
*(В папке constants объявляется ТОЛЬКО const объект! Никаких типов!)*
```ts
export const FormFields = {
  TITLE: 'title',
  PINFL: 'pinfl',
  ROLE: 'role',
  FILE: 'file',
} as const;
```

### Этап 2. Типы и интерфейс значений (`model/types/form.ts`)
*(Все type и interface объявляются ИСКЛЮЧИТЕЛЬНО в папке types!)*
```ts
import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IFormValues {
  [FormFields.TITLE]: string;
  [FormFields.PINFL]?: string;
  [FormFields.ROLE]: string;
  [FormFields.FILE]?: File | null;
}
```

### Этап 3. Реэкспорт в Public API (`index.ts`)
*(Реэкспортируется **ТОЛЬКО** если форма декомпозирована и родитель снаружи принимает значения сабмита `onFinish`. Если форма полностью изолирована внутри модалки — наружу в `index.ts` она НЕ экспортируется!)*
```ts
// Только при необходимости передачи наружу:
export type { IFormValues } from './model/types/form';
```

---

## 2. Архитектура размещения инстанса формы (`useForm`)

Существует два чётких сценария инициализации и показа формы:

### Сценарий А. Автономная форма в одном компоненте (Основной стандарт)
Когда модалка или экран сам содержит и форму, и управление ею. 
Инстанс `useForm` создается **прямо в этом же компоненте**. Пропсы формы снаружи **не принимаются**!

```tsx
import type { FC } from 'react';
import { Form, Modal, Button, Input } from 'antd';
import { FormFields } from '../model/constants/form-fields';
import type { IFormValues } from '../model/types/form';

const { Item, useForm } = Form;

export const UserCreateModal: FC = () => {
  // Инстанс формы инициализируется прямо здесь
  const [form] = useForm<IFormValues>();

  const handleClose = () => {
    form.resetFields(); // Сброс полей
  };

  const handleSubmit = () => {
    form.submit(); // Сабмит из футера модалки
  };

  const handleFinish = (values: IFormValues) => {
    console.log('Submitted values:', values);
  };

  return (
    <Modal
      open={true}
      destroyOnHidden
      footer={
        <div className={cn('modal__footer')}>
          <Button onClick={handleClose}>Отмена</Button>
          <Button type='primary' onClick={handleSubmit}>Подтвердить</Button>
        </div>
      }
    >
      <Form
        form={form}
        layout='vertical'
        className={cn('form')}
        onFinish={handleFinish}
      >
        <Item name={FormFields.TITLE} label='Заголовок'>
          <Input />
        </Item>
      </Form>
    </Modal>
  );
};
```

### Сценарий Б. Декомпозиция формы (Инстанс в родителе, разметка в дочернем)
**Только когда форма выносится в отдельный дочерний подкомпонент**, инстанс формы передается через пропсы, чтобы родитель мог вызывать `form.submit()` из своего футера/тулбара.

**Дочерний компонент формы (`ui/user-form.tsx`)**:
```tsx
import type { FC } from 'react';
import type { FormInstance } from 'antd';
import { Form, Input } from 'antd';
import { FormFields } from '../model/constants/form-fields';
import type { IFormValues } from '../model/types/form';

const { Item } = Form;

interface IProps {
  form: FormInstance<IFormValues>; // форма приходит через пропсы ТОЛЬКО при декомпозиции
  onFinish: (values: IFormValues) => void;
  className?: string;
}

export const UserForm: FC<IProps> = ({ form, onFinish, className }) => {
  return (
    <Form
      form={form}
      layout='vertical'
      className={cn('form', className)}
      onFinish={onFinish}
    >
      <Item name={FormFields.TITLE} label='Заголовок'>
        <Input />
      </Item>
    </Form>
  );
};
```

**Родительский компонент (`ui/user-modal.tsx`)**:
```tsx
export const UserModal: FC = () => {
  const [form] = Form.useForm<IFormValues>();

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <Modal footer={<Button onClick={handleSubmit}>Сохранить</Button>}>
      <UserForm form={form} onFinish={handleFinish} />
    </Modal>
  );
};
```

---

## 3. Нулевой строковый хардкод в `name`
Имя поля в `<Form.Item>` **всегда** берется из объекта констант `FormFields`. Прямой строковый литерал `name='email'` строго запрещен:
```tsx
<Item
  label={t('fields.title')}
  name={FormFields.TITLE}
  rules={[{ required: true, message: t('validation.titleRequired') }]}
>
  <Input />
</Item>
```

---

## 4. Схема валидации
- Все сообщения валидации локализуются через `t('...validation.required')`.
- Кастомные функции валидации выносятся в `model/lib/helpers/validators.ts`:
```ts
import type { RuleObject } from 'antd/es/form';

export const validatePinfl = (_: RuleObject, value: string) => {
  if (!value) return Promise.resolve();
  const clean = value.replace(/\s+/g, '');
  if (clean.length !== 14) {
    return Promise.reject(new Error('PINFL must contain 14 digits'));
  }
  return Promise.resolve();
};
```

---

## 5. Внешний сабмит и сброс формы
В модальных окнах кнопка отправки находится в `footer` модалки. Сабмит вызывается программно через `form.submit()`:
```tsx
const handleSubmit = () => {
  form.submit(); // Триггерит валидацию и onFinish формы
};

const handleClose = () => {
  form.resetFields(); // Обязательный сброс при закрытии
  dispatch(close());
};

const handleFinish = (values: IFormValues) => {
  console.log('Submitted:', values);
  handleClose();
};
```

---

## 6. Кастомные Form Controls
Любой кастомный компонент, передаваемый в `Form.Item` (загрузчик файлов, выбор сертификата, FaceID), обязан соблюдать контракт Ant Design: принимать `value` и вызывать `onChange`.
```tsx
interface IProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const CustomInput: FC<IProps> = ({ value, onChange, className }) => {
  // ...
};
```
