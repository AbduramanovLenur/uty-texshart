import { useEffect, type FC } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { FormFields } from '../model/constants/form-fields';
import { MtuAndCompaniesTypes } from '../model/constants/mtu-and-companies-types';
import { getMtuAndCompaniesTypeOptions } from '../model/lib/utils/get-mtu-and-companies-type-options';
import { mockCompanyTypeOptions, mockMtuOptions } from '../model/mock';
import { close, stateMtuAndCompaniesModal } from '../model/store/slice';
import type { IMtuAndCompaniesFormValues } from '../model/types/form';
import { IconDownArrow } from '@shared/assets';

import styles from './mtu-and-companies-modal.module.scss';

const { Item, useForm, useWatch } = Form;

const MtuAndCompaniesModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, type, id } = useSelector(stateMtuAndCompaniesModal);
  const [form] = useForm<IMtuAndCompaniesFormValues>();

  const selectedType = useWatch(FormFields.TYPE, form);
  const isCompany = selectedType === MtuAndCompaniesTypes.COMPANIES;

  useEffect(() => {
    if (isOpen) {
      form.setFieldsValue({
        [FormFields.TYPE]: type,
      });
    }
  }, [isOpen, type, form]);

  const typeOptions = getMtuAndCompaniesTypeOptions(t);

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IMtuAndCompaniesFormValues) => {
    console.log({ id, ...values });
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['mtu-and-companies-modal'])}
      classNames={{
        body: cn(styles['mtu-and-companies-modal__body']),
      }}
      open={isOpen}
      onCancel={handleClose}
      title={id ? t('mtuAndCompaniesModal.titleEdit') : t('mtuAndCompaniesModal.title')}
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
            {t('createUserModal.actions.cancel')}
          </Button>
          <Button
            className={cn('modal__button-confirm')}
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
        className={cn(styles['mtu-and-companies-modal__form'])}
        layout='vertical'
        onFinish={handleFinish}
      >
        <Item
          label={t('mtuAndCompaniesModal.fields.type')}
          name={FormFields.TYPE}
          rules={[
            {
              required: true,
              message: t('mtuAndCompaniesModal.validation.typeRequired'),
            },
          ]}
        >
          <Select
            className={cn(styles['mtu-and-companies-modal__select'])}
            size='large'
            options={typeOptions}
            disabled={Boolean(id)}
            placeholder={t('createUserModal.fields.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
          />
        </Item>
        {isCompany && (
          <Item
            label={t('mtuAndCompaniesModal.fields.companyType')}
            name={FormFields.COMPANY_TYPE}
            rules={[
              {
                required: true,
                message: t('mtuAndCompaniesModal.validation.companyTypeRequired'),
              },
            ]}
          >
            <Select
              className={cn(styles['mtu-and-companies-modal__select'])}
              size='large'
              options={mockCompanyTypeOptions}
              placeholder={t('createUserModal.fields.selectPlaceholder')}
              suffixIcon={<IconDownArrow />}
            />
          </Item>
        )}
        <Item
          label={t('mtuAndCompaniesModal.fields.name')}
          name={FormFields.NAME}
        >
          <Input
            size='large'
            placeholder={t('mtuAndCompaniesModal.fields.namePlaceholder')}
          />
        </Item>
        {isCompany && (
          <>
            <Item
              label={t('mtuAndCompaniesModal.fields.kmPk')}
              name={FormFields.KM_PK}
            >
              <Input
                size='large'
                placeholder={t('mtuAndCompaniesModal.fields.kmPkPlaceholder')}
              />
            </Item>
            <Item
              label={t('mtuAndCompaniesModal.fields.mtuName')}
              name={FormFields.MTU_NAME}
              rules={[
                {
                  required: true,
                  message: t('mtuAndCompaniesModal.validation.mtuRequired'),
                },
              ]}
            >
              <Select
                className={cn(styles['mtu-and-companies-modal__select'])}
                size='large'
                options={mockMtuOptions}
                placeholder={t('createUserModal.fields.selectPlaceholder')}
                suffixIcon={<IconDownArrow />}
              />
            </Item>
          </>
        )}
      </Form>
    </Modal>
  );
};

export default MtuAndCompaniesModal;
