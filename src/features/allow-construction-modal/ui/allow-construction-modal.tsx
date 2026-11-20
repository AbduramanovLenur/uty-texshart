import type { FC } from 'react';
import { Button, Form, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { close, stateAllowConstructionModal } from '../model/store/slice';
import type { IAllowConstructionFormValues } from '../model/types/form';
import UploadFileField from './upload-file-field';

const { Item, useForm } = Form;

const AllowConstructionModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, id, key } = useSelector(stateAllowConstructionModal);
  const [form] = useForm<IAllowConstructionFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IAllowConstructionFormValues) => {
    console.log('Allow construction values:', { id, key, ...values });
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
      title={t('allowConstructionModal.title')}
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
          label={t('allowConstructionModal.fields.file')}
          name={FormFields.FILE}
          rules={[
            {
              required: true,
              message: t('allowConstructionModal.validation.fileRequired'),
            },
          ]}
        >
          <UploadFileField />
        </Item>
      </Form>
    </Modal>
  );
};

export default AllowConstructionModal;
