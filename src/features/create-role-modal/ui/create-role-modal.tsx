import type { FC } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { close, stateModal } from '../model/store/slice';
import type { IFormValues } from '../model/types/form';

const { Item, useForm } = Form;

const CreateRoleModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateModal);
  const [form] = useForm<IFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IFormValues) => {
    console.log('Create role form values:', values);
    handleClose();
  };

  return (
    <Modal
      className={cn('modal')}
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
