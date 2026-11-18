import type { FC } from 'react';
import { Button, Form, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { regionalDepartmentOptionsMock } from '../model/mock';
import { close, stateForwardApplicationModal } from '../model/store/slice';
import type { IForwardApplicationFormValues } from '../model/types/form';

import { IconDownArrow } from '@shared/assets';

import styles from './forward-application-modal.module.scss';

const { Item, useForm } = Form;

const ForwardApplicationModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, key } = useSelector(stateForwardApplicationModal);
  const [form] = useForm<IForwardApplicationFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IForwardApplicationFormValues) => {
    console.log('Forward application form values:', { ...values, actionKey: key });
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['forward-application-modal'])}
      classNames={{
        body: cn(styles['forward-application-modal__body']),
      }}
      open={isOpen}
      onCancel={handleClose}
      title={t('forwardApplicationModal.title')}
      centered
      width={500}
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
        className={cn(styles['forward-application-modal__form'], 'form')}
        layout='vertical'
        onFinish={handleFinish}
      >
        <Item
          label={t('forwardApplicationModal.fields.regionalDepartment')}
          name={FormFields.REGIONAL_DEPARTMENT}
          rules={[
            {
              required: true,
              message: t('forwardApplicationModal.validation.regionalDepartmentRequired'),
            },
          ]}
        >
          <Select
            className={cn(styles['forward-application-modal__select'], 'form-select')}
            size='large'
            placeholder={t('forwardApplicationModal.fields.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
            options={regionalDepartmentOptionsMock}
          />
        </Item>
      </Form>
    </Modal>
  );
};

export default ForwardApplicationModal;
