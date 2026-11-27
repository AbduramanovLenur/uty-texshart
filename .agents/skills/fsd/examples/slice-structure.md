# Полная эталонная структура FSD-слайса фичи

Ниже приведена исчерпывающая реализация слайса модального окна со всеми папками (`constants`, `config`, `lib` [hooks, helpers, utils], `store`, `types`, `mock.ts`, `ui`, `index.ts`), соблюдающая 100% стандартов проекта:
- `erasableSyntaxOnly: true` (никаких `enum`, только `as const`)
- **Все типы и интерфейсы строго в папке `types/`** (в `constants/` и `config/` объявлений типов нет!)
- В `ui/` разрешен только `interface IProps`
- Все действия вынесены в функции с префиксом `handle...`
- SCSS-модули и BEM нейминг

```text
src/features/create-role-modal/
├── index.ts
├── model/
│   ├── constants/
│   │   ├── form-fields.ts             # Константы полей формы (as const)
│   │   └── role-permissions.ts        # Константы прав ролей (as const)
│   ├── config/
│   │   └── permissions-config.ts      # Массив опций для селекта (без типов!)
│   ├── types/
│   │   ├── form.ts                    # TFormField и IFormValues
│   │   ├── permission.ts              # TRolePermission и IPermissionOption
│   │   └── state.ts                   # IState и IOpenPayload
│   ├── lib/
│   │   ├── hooks/
│   │   │   └── use-role-permissions.ts # Локальные хуки слайса
│   │   ├── helpers/
│   │   │   └── validators.ts          # Валидаторы для Antd Form (rules)
│   │   └── utils/
│   │       └── filter-permissions.ts  # Чистые утилиты и преобразования данных
│   ├── store/
│   │   └── slice.ts                   # Redux Toolkit слайс
│   └── mock.ts                        # Мок-данные и симуляция async
└── ui/
    ├── create-role-modal.module.scss  # BEM стили
    └── create-role-modal.tsx          # Компонент с IProps и handle...
```

---

### 1. `model/constants/form-fields.ts`
*(Здесь объявляются ТОЛЬКО константы, никаких типов!)*
```ts
export const FormFields = {
  NAME: 'name',
  DESCRIPTION: 'description',
  PERMISSIONS: 'permissions',
} as const;
```

---

### 2. `model/constants/role-permissions.ts`
*(Здесь объявляются ТОЛЬКО константы, никаких типов!)*
```ts
export const RolePermissions = {
  READ_USERS: 'READ_USERS',
  WRITE_USERS: 'WRITE_USERS',
  MANAGE_ROLES: 'MANAGE_ROLES',
  VIEW_LOGS: 'VIEW_LOGS',
} as const;
```

---

### 3. `model/types/permission.ts`
*(Все типы прав и опций объявляются ЗДЕСЬ, в папке types)*
```ts
import type { RolePermissions } from '../constants/role-permissions';

export type TRolePermission = (typeof RolePermissions)[keyof typeof RolePermissions];

export interface IPermissionOption {
  labelKey: string;
  value: TRolePermission;
}
```

---

### 4. `model/types/form.ts`
*(Все типы формы и полей объявляются ЗДЕСЬ, в папке types)*
```ts
import type { FormFields } from '../constants/form-fields';
import type { TRolePermission } from './permission';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IFormValues {
  [FormFields.NAME]: string;
  [FormFields.DESCRIPTION]?: string;
  [FormFields.PERMISSIONS]?: TRolePermission[];
}
```

---

### 5. `model/types/state.ts`
*(Все типы состояния объявляются ЗДЕСЬ, в папке types)*
```ts
export interface IOpenPayload {
  id?: string | null;
  key?: string | null;
}

export interface IState {
  isOpen: boolean;
  id: string | null;
  key: string | null;
}
```

---

### 6. `model/config/permissions-config.ts`
*(Конфигурация ТОЛЬКО импортирует тип из types, внутри config типов нет!)*
```ts
import { RolePermissions } from '../constants/role-permissions';
import type { IPermissionOption } from '../types/permission';

export const permissionOptions: IPermissionOption[] = [
  { labelKey: 'roles.permissions.readUsers', value: RolePermissions.READ_USERS },
  { labelKey: 'roles.permissions.writeUsers', value: RolePermissions.WRITE_USERS },
  { labelKey: 'roles.permissions.manageRoles', value: RolePermissions.MANAGE_ROLES },
  { labelKey: 'roles.permissions.viewLogs', value: RolePermissions.VIEW_LOGS },
];
```

---

### 7. `model/lib/helpers/validators.ts`
```ts
import type { RuleObject } from 'antd/es/form';
import type { TFunction } from 'i18next';

export const validateRoleName = (t: TFunction) => {
  return (_: RuleObject, value: string): Promise<void> => {
    if (!value) {
      return Promise.resolve();
    }
    const trimmed = value.trim();
    if (trimmed.length < 3) {
      return Promise.reject(new Error(t('createRoleModal.validation.nameTooShort')));
    }
    return Promise.resolve();
  };
};
```

---

### 8. `model/lib/utils/filter-permissions.ts`
```ts
import { permissionOptions } from '../../config/permissions-config';
import type { IPermissionOption, TRolePermission } from '../../types/permission';

export const filterAvailablePermissions = (
  forbiddenKeys: TRolePermission[] = [],
): IPermissionOption[] => {
  if (forbiddenKeys.length === 0) {
    return permissionOptions;
  }
  return permissionOptions.filter((opt) => !forbiddenKeys.includes(opt.value));
};
```

---

### 9. `model/lib/hooks/use-role-permissions.ts`
```ts
import { useState } from 'react';
import type { TRolePermission } from '../../types/permission';

export const useRolePermissions = (initialSelected: TRolePermission[] = []) => {
  const [selectedPermissions, setSelectedPermissions] = useState<TRolePermission[]>(initialSelected);

  const handleSelectPermission = (permission: TRolePermission) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission) ? prev.filter((p) => p !== permission) : [...prev, permission],
    );
  };

  const handleClearPermissions = () => {
    setSelectedPermissions([]);
  };

  return {
    selectedPermissions,
    handleSelectPermission,
    handleClearPermissions,
  };
};
```

---

### 10. `model/store/slice.ts`
```ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  id: null,
  key: null,
};

const slice = createSlice({
  name: 'createRoleModalSlice',
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

export const stateModal = (state: { createRoleModalSlice: IState }) => state.createRoleModalSlice;
```

---

### 11. `model/mock.ts`
```ts
import type { IFormValues } from './types/form';
import { FormFields } from './constants/form-fields';
import { RolePermissions } from './constants/role-permissions';

export const mockDefaultRoleValues: IFormValues = {
  [FormFields.NAME]: 'Content Manager',
  [FormFields.DESCRIPTION]: 'Управление контентом и справочниками',
  [FormFields.PERMISSIONS]: [RolePermissions.READ_USERS, RolePermissions.VIEW_LOGS],
};

export const simulateCreateRole = async (data: IFormValues, delayMs: number = 800): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), delayMs);
  });
};
```

---

### 12. `ui/create-role-modal.module.scss`
```scss
.create-role-modal {
  &__subtitle {
    margin-bottom: 20px;
    font-size: 14px;
    color: var(--dark-45);
  }

  &__fields-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__select {
    width: 100%;
  }
}
```

---

### 13. `ui/create-role-modal.tsx`
```tsx
import type { FC } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { permissionOptions } from '../model/config/permissions-config';
import { validateRoleName } from '../model/lib/helpers/validators';
import { close, stateModal } from '../model/store/slice';
import type { IFormValues } from '../model/types/form';
import styles from './create-role-modal.module.scss';

const { Item, useForm } = Form;

// В файле компонента разрешён ТОЛЬКО интерфейс собственных пропсов:
interface IProps {
  className?: string;
  onSuccess?: () => void;
}

export const CreateRoleModal: FC<IProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateModal);

  const [form] = useForm<IFormValues>();

  // Все действия объявляются отдельными именованными функциями с префиксом handle...
  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IFormValues) => {
    console.log('Create role form values:', values);
    onSuccess?.();
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['create-role-modal'], className)}
      classNames={{
        body: cn('form-body'),
      }}
      open={isOpen}
      onCancel={handleClose}
      title={t('createRoleModal.title')}
      centered
      width={520}
      destroyOnHidden
      footer={
        <div className={cn('modal__footer')}>
          <Button
            className={cn('modal__button-close')}
            type='default'
            onClick={handleClose}
          >
            {t('actions.cancel')}
          </Button>
          <Button
            className={cn('modal__button-confirm')}
            type='primary'
            onClick={handleSubmit}
          >
            {t('actions.confirm')}
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        className={cn('form')}
        layout='vertical'
        onFinish={handleFinish}
      >
        <Item
          label={t('createRoleModal.fields.name')}
          name={FormFields.NAME}
          rules={[
            {
              required: true,
              message: t('createRoleModal.validation.nameRequired'),
            },
            { validator: validateRoleName(t) },
          ]}
        >
          <Input
            size='large'
            placeholder={t('createRoleModal.fields.namePlaceholder')}
          />
        </Item>

        <Item
          label={t('createRoleModal.fields.description')}
          name={FormFields.DESCRIPTION}
        >
          <Input
            size='large'
            placeholder={t('createRoleModal.fields.descriptionPlaceholder')}
          />
        </Item>

        <Item
          label={t('createRoleModal.fields.permissions')}
          name={FormFields.PERMISSIONS}
        >
          <Select
            mode='multiple'
            size='large'
            className={cn(styles['create-role-modal__select'])}
            placeholder={t('createRoleModal.fields.permissionsPlaceholder')}
            options={permissionOptions.map((opt) => ({
              label: t(opt.labelKey),
              value: opt.value,
            }))}
          />
        </Item>
      </Form>
    </Modal>
  );
};

export default CreateRoleModal;
```

---

### 14. `index.ts` (Public API)
*(В `index.ts` экспортируется **ТОЛЬКО** то, что реально используется вовне! Никаких внутренних типов форм, констант или селекторов, которые нужны только внутри слайса)*
```ts
// 1. Компонент модалки (нужен родительской странице/виджету для рендера)
export { default as CreateRoleModal } from './ui/create-role-modal';

// 2. Редюсер (нужен rootStore.ts для подключения в combineReducers)
// и экшен open (нужен внешним кнопкам/таблицам для открытия)
export { reducer, open } from './model/store/slice';

// 3. Тип payload для открытия (если вызывающий компонент передаёт параметры в open)
export type { IOpenPayload } from './model/types/state';

// ВСЁ ОСТАЛЬНОЕ (IFormValues, IState, close, stateModal, TRolePermission, IPermissionOption)
// используется ИСКЛЮЧИТЕЛЬНО внутри этого слайса и в index.ts НЕ экспортируется!
```
