# Примеры типизированных форм Ant Design

## Вариант 1. Автономная форма (Стандарт проекта)
Инстанс `useForm` создается **в этом же компоненте**, где расположена форма. Внешние пропсы `form` не требуются.

```tsx
import type { FC } from 'react';
import { Form, Modal, Button, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import type { IFormValues } from '../model/types/form';
import { validatePinfl } from '../model/lib/helpers/validators';
import { close, stateModal } from '../model/store/slice';

const { Item, useForm } = Form;

export const UserModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateModal);

  // 1. Инстанс создается прямо в этом компоненте
  const [form] = useForm<IFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IFormValues) => {
    console.log('Submitted values:', values);
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleClose}
      destroyOnHidden
      centered
      className={cn('modal')}
      classNames={{ body: cn('form-body') }}
      footer={
        <div className={cn('modal__footer')}>
          <Button onClick={handleClose}>{t('actions.cancel')}</Button>
          <Button type='primary' onClick={handleSubmit}>{t('actions.confirm')}</Button>
        </div>
      }
    >
      <Form
        form={form}
        layout='vertical'
        className={cn('form')}
        onFinish={handleFinish}
      >
        <Item
          label={t('users.fields.fullName')}
          name={FormFields.FULL_NAME}
          rules={[{ required: true, message: t('users.validation.fullNameRequired') }]}
        >
          <Input placeholder={t('users.placeholders.fullName')} />
        </Item>

        <Item
          label={t('users.fields.pinfl')}
          name={FormFields.PINFL}
          rules={[{ validator: validatePinfl }]}
        >
          <Input placeholder='0000 0000 0000 00' />
        </Item>

        <Item
          label={t('users.fields.role')}
          name={FormFields.ROLE}
          rules={[{ required: true, message: t('users.validation.roleRequired') }]}
        >
          <Select placeholder={t('users.placeholders.role')} />
        </Item>
      </Form>
    </Modal>
  );
};
```

---

## Вариант 2. Декомпозированная форма (Parent-Child)
Инстанс `useForm` объявляется в родительском компоненте (чтобы родитель мог вызвать `form.submit()`), а верстка полей вынесена в дочерний компонент. **Только в этом случае** форма передаётся через пропсы.

### Дочерний компонент (`ui/user-form.tsx`):
```tsx
import type { FC } from 'react';
import type { FormInstance } from 'antd';
import { Form, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import type { IFormValues } from '../model/types/form';
import { validatePinfl } from '../model/lib/helpers/validators';

const { Item } = Form;

interface IProps {
  form: FormInstance<IFormValues>; // форма приходит через пропсы ТОЛЬКО при декомпозиции
  onFinish: (values: IFormValues) => void;
  className?: string;
}

export const UserForm: FC<IProps> = ({ form, onFinish, className }) => {
  const { t } = useTranslation();

  return (
    <Form
      form={form}
      layout='vertical'
      className={cn('form', className)}
      onFinish={onFinish}
    >
      <Item
        label={t('users.fields.fullName')}
        name={FormFields.FULL_NAME}
        rules={[{ required: true, message: t('users.validation.fullNameRequired') }]}
      >
        <Input placeholder={t('users.placeholders.fullName')} />
      </Item>

      <Item
        label={t('users.fields.pinfl')}
        name={FormFields.PINFL}
        rules={[{ validator: validatePinfl }]}
      >
        <Input placeholder='0000 0000 0000 00' />
      </Item>

      <Item
        label={t('users.fields.role')}
        name={FormFields.ROLE}
        rules={[{ required: true, message: t('users.validation.roleRequired') }]}
      >
        <Select placeholder={t('users.placeholders.role')} />
      </Item>
    </Form>
  );
};
```

### Родительский компонент (`ui/user-modal.tsx`):
```tsx
import type { FC } from 'react';
import { Modal, Button, Form } from 'antd';
import { UserForm } from './user-form';
import type { IFormValues } from '../model/types/form';

export const UserModal: FC = () => {
  const [form] = Form.useForm<IFormValues>();

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IFormValues) => {
    console.log('Values:', values);
  };

  return (
    <Modal footer={<Button type='primary' onClick={handleSubmit}>Сохранить</Button>}>
      {/* Инстанс передается в дочерний компонент */}
      <UserForm form={form} onFinish={handleFinish} />
    </Modal>
  );
};
```
