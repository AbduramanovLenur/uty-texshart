import type { FC } from 'react';
import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { close, stateCreateUserModal } from '../model/store/slice';
import type { ICreateUserFormValues } from '../model/types/form';

import { IconDownArrow } from '@shared/assets';

import styles from './create-user-modal.module.scss';

const { Item, useForm } = Form;

const CreateUserModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen } = useSelector(stateCreateUserModal);
  const [form] = useForm<ICreateUserFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: ICreateUserFormValues) => {
    console.log(values);
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['create-user-modal'])}
      classNames={{
        body: styles['create-user-modal__body'],
      }}
      open={isOpen}
      onCancel={handleClose}
      title={t('createUserModal.title')}
      centered
      width={520}
      destroyOnHidden
      footer={
        <div className='modal__footer'>
          <Button
            className='modal__button-close'
            type='default'
            onClick={handleClose}
          >
            {t('createUserModal.actions.cancel')}
          </Button>
          <Button
            className='modal__button-confirm'
            type='primary'
            onClick={handleSubmit}
          >
            {t('createUserModal.actions.confirm')}
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        className={styles['create-user-modal__form']}
        layout='vertical'
        onFinish={handleFinish}
      >
        <div className={styles['create-user-modal__form-wrapper']}>
          <Item
            label={t('createUserModal.fields.pinfl')}
            name={FormFields.PINFL}
            rules={[
              {
                required: true,
                message: t('createUserModal.validation.pinflRequired'),
              },
            ]}
          >
            <Input
              size='large'
              placeholder={t('createUserModal.fields.pinflPlaceholder')}
            />
          </Item>

          <Item
            label={t('createUserModal.fields.fullName')}
            name={FormFields.FULL_NAME}
          >
            <Input
              size='large'
              disabled
              placeholder={t('createUserModal.fields.fullNamePlaceholder')}
            />
          </Item>

          <Item
            label={t('createUserModal.fields.position')}
            name={FormFields.POSITION}
          >
            <Input
              size='large'
              disabled
              placeholder={t('createUserModal.fields.positionPlaceholder')}
            />
          </Item>

          <Item
            label={t('createUserModal.fields.role')}
            name={FormFields.ROLE}
            rules={[
              {
                required: true,
                message: t('createUserModal.validation.roleRequired'),
              },
            ]}
          >
            <Select
              className={styles['create-user-modal__select']}
              size='large'
              placeholder={t('createUserModal.fields.selectPlaceholder')}
              suffixIcon={<IconDownArrow />}
            />
          </Item>

          <Item
            label={t('createUserModal.fields.regionalDepartment')}
            name={FormFields.REGIONAL_DEPARTMENT}
            rules={[
              {
                required: true,
                message: t('createUserModal.validation.regionalDepartmentRequired'),
              },
            ]}
          >
            <Select
              className={styles['create-user-modal__select']}
              size='large'
              placeholder={t('createUserModal.fields.selectPlaceholder')}
              suffixIcon={<IconDownArrow />}
            />
          </Item>

          <div className={styles['create-user-modal__row']}>
            <Item
              label={t('createUserModal.fields.phone')}
              name={FormFields.PHONE}
            >
              <Input
                size='large'
                placeholder={t('createUserModal.fields.phonePlaceholder')}
              />
            </Item>

            <Item
              label={t('createUserModal.fields.email')}
              name={FormFields.EMAIL}
            >
              <Input
                size='large'
                placeholder={t('createUserModal.fields.emailPlaceholder')}
              />
            </Item>
          </div>
        </div>

        <div className={styles['create-user-modal__checkbox-wrapper']}>
          <Item
            className={styles['create-user-modal__checkbox-item']}
            name={FormFields.TELEGRAM_NOTIFICATIONS}
            valuePropName='checked'
          >
            <Checkbox className={styles['create-user-modal__checkbox']}>
              {t('createUserModal.fields.telegramNotifications')}
            </Checkbox>
          </Item>
        </div>

        <Item
          label={t('createUserModal.fields.comment')}
          name={FormFields.COMMENT}
        >
          <Input
            size='large'
            placeholder={t('createUserModal.fields.commentPlaceholder')}
          />
        </Item>
      </Form>
    </Modal>
  );
};

export default CreateUserModal;
