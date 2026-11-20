import type { FC } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { close, stateConfirmActModal } from '../model/store/slice';
import type { IConfirmActFormValues } from '../model/types/form';

import styles from './confirm-act-modal.module.scss';

const { Item, useForm } = Form;

interface IProps {
  onSubmit?: (values: IConfirmActFormValues) => void;
}

const ConfirmActModal: FC<IProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, id, key } = useSelector(stateConfirmActModal);
  const [form] = useForm<IConfirmActFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IConfirmActFormValues) => {
    console.log('Confirm act form values:', { id, key, ...values });
    onSubmit?.(values);
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['confirm-act-modal'])}
      classNames={{
        body: cn(styles['confirm-act-modal__body'], 'form-body'),
      }}
      open={isOpen}
      onCancel={handleClose}
      title={t('confirmActModal.title')}
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
        className={cn(styles['confirm-act-modal__form'], 'form')}
        layout='vertical'
        onFinish={handleFinish}
      >
        <Item
          label={t('confirmActModal.fields.comment')}
          name={FormFields.COMMENT}
        >
          <Input
            size='large'
            placeholder={t('confirmActModal.fields.commentPlaceholder')}
          />
        </Item>
      </Form>
    </Modal>
  );
};

export default ConfirmActModal;
