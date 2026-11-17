import type { FC } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { rejectReasonOptionsMock } from '../model/mock';
import { close, stateRejectApplicationModal } from '../model/store/slice';
import type { IRejectApplicationFormValues } from '../model/types/form';

import { IconDownArrow } from '@shared/assets';

import styles from './reject-application-modal.module.scss';

const { Item, useForm } = Form;

const RejectApplicationModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, key } = useSelector(stateRejectApplicationModal);
  const [form] = useForm<IRejectApplicationFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IRejectApplicationFormValues) => {
    console.log('Reject application form values:', { ...values, actionKey: key });
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['reject-application-modal'])}
      classNames={{
        body: cn(styles['reject-application-modal__body']),
      }}
      open={isOpen}
      onCancel={handleClose}
      title={t('rejectApplicationModal.title', 'Rad etish')}
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
            {t('rejectApplicationModal.actions.cancel')}
          </Button>
          <Button
            className={cn('modal__button-confirm')}
            type='primary'
            onClick={handleSubmit}
          >
            {t('rejectApplicationModal.actions.confirm')}
          </Button>
        </div>
      }
    >
      <Form
        form={form}
        className={cn(styles['reject-application-modal__form'], 'form')}
        layout='vertical'
        onFinish={handleFinish}
      >
        <Item
          label={t('rejectApplicationModal.fields.rejectReason')}
          name={FormFields.REJECT_REASON}
          rules={[
            {
              required: true,
              message: t('rejectApplicationModal.validation.rejectReasonRequired'),
            },
          ]}
        >
          <Select
            className={cn(styles['reject-application-modal__select'], 'form-select')}
            size='large'
            placeholder={t('rejectApplicationModal.fields.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
            options={rejectReasonOptionsMock}
          />
        </Item>

        <Item
          label={t('rejectApplicationModal.fields.comment')}
          name={FormFields.COMMENT}
        >
          <Input
            size='large'
            placeholder={t('rejectApplicationModal.fields.commentPlaceholder')}
          />
        </Item>
      </Form>
    </Modal>
  );
};

export default RejectApplicationModal;
