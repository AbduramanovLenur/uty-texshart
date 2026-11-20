import type { FC } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { close, stateCreateRoleModal } from '../model/store/slice';
import type { ICreateRoleFormValues } from '../model/types/form';

import styles from './create-role-modal.module.scss';

const { Item, useForm } = Form;

interface IProps {
  onSubmit?: (values: ICreateRoleFormValues) => void;
}

const CreateRoleModal: FC<IProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateCreateRoleModal);
  const [form] = useForm<ICreateRoleFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: ICreateRoleFormValues) => {
    console.log('Create role form values:', values);
    onSubmit?.(values);
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['create-role-modal'])}
      classNames={{
        body: cn(styles['create-role-modal__body'], 'form-body'),
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
        className={cn(styles['create-role-modal__form'], 'form')}
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
      </Form>
    </Modal>
  );
};

export default CreateRoleModal;
