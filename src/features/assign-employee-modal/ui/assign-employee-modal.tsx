import type { FC } from 'react';
import { Button, Form, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { employeeOptionsMock } from '../model/mock';
import { close, stateModal } from '../model/store/slice';
import type { IFormValues } from '../model/types/form';

import { IconDownArrow } from '@shared/assets';

const { Item, useForm } = Form;

const AssignEmployeeModal: FC = () => {
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
    console.log('Assign employee form values:', { id, key, ...values });
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
      title={t('assignEmployeeModal.title')}
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
          label={t('assignEmployeeModal.fields.employee')}
          name={FormFields.EMPLOYEE}
          rules={[
            {
              required: true,
              message: t('assignEmployeeModal.validation.employeeRequired'),
            },
          ]}
        >
          <Select
            className={cn('form-select')}
            size='large'
            placeholder={t('assignEmployeeModal.fields.employeePlaceholder')}
            suffixIcon={<IconDownArrow />}
            options={employeeOptionsMock}
          />
        </Item>
      </Form>
    </Modal>
  );
};

export default AssignEmployeeModal;
