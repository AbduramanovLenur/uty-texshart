import type { FC } from 'react';
import { Button, Form, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { close, stateModal } from '../model/store/slice';
import type { IFormValues } from '../model/types/form';

import { UploadFileField } from '@shared/ui';

const { Item, useForm } = Form;

const UploadTechnicalSpecificationModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, id, key } = useSelector(stateModal);
  const [form] = useForm<IFormValues>();

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IFormValues) => {
    console.log('Upload technical specification values:', { id, key, ...values });
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
      title={t('uploadTechnicalSpecificationModal.title')}
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
          label={t('uploadTechnicalSpecificationModal.fields.file')}
          name={FormFields.FILE}
          rules={[
            {
              required: true,
              message: t('uploadTechnicalSpecificationModal.validation.fileRequired'),
            },
          ]}
        >
          <UploadFileField />
        </Item>
      </Form>
    </Modal>
  );
};

export default UploadTechnicalSpecificationModal;
