import { useEffect, type FC } from 'react';
import { Button, Checkbox, Form, Input, Modal, Select } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { getReferenceTypeOptions } from '../model/lib/utils/get-reference-type-options';
import { FormFields } from '../model/constants/form-fields';
import { ReferenceDataTypes } from '../model/constants/reference-data-types';
import { close, stateReferenceDataModal } from '../model/store/slice';
import type { IReferenceDataFormValues } from '../model/types/form';
import { mockCommunicationTypeOptions, mockCrossingMethodOptions } from '../model/mock';

import { IconDownArrow, IconPlus, IconTrash } from '@shared/assets';

import styles from './reference-data-modal.module.scss';

const { Item, List, useForm, useWatch } = Form;

const ReferenceDataModal: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, referenceType, id } = useSelector(stateReferenceDataModal);
  const [form] = useForm<IReferenceDataFormValues>();

  const selectedReferenceType = useWatch(FormFields.REFERENCE_TYPE, form);
  const hasMultipleOptions = useWatch(FormFields.HAS_MULTIPLE_OPTIONS, form);

  const isCrossingMethod = selectedReferenceType === ReferenceDataTypes.CROSSING_METHODS;
  const isTechnicalParameter = selectedReferenceType === ReferenceDataTypes.TECHNICAL_PARAMETERS;

  useEffect(() => {
    if (isOpen) {
      form.setFieldsValue({
        [FormFields.REFERENCE_TYPE]: referenceType,
        [FormFields.HAS_MULTIPLE_OPTIONS]: false,
        [FormFields.OPTIONS]: [''],
      });
    }
  }, [isOpen, referenceType, form]);

  const handleAddOption = () => {
    const currentOptions = form.getFieldValue(FormFields.OPTIONS) ?? [];
    form.setFieldValue(FormFields.OPTIONS, [...currentOptions, '']);
  };

  const referenceTypeOptions = getReferenceTypeOptions(t);

  const handleClose = () => {
    form.resetFields();
    dispatch(close());
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: IReferenceDataFormValues) => {
    console.log({ id, ...values });
    handleClose();
  };

  return (
    <Modal
      className={cn('modal', styles['reference-data-modal'])}
      classNames={{
        body: cn(styles['reference-data-modal__body']),
      }}
      open={isOpen}
      onCancel={handleClose}
      title={id ? t('referenceDataModal.titleEdit') : t('referenceDataModal.title')}
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
        className={styles['reference-data-modal__form']}
        layout='vertical'
        onFinish={handleFinish}
      >
        <Item
          label={t('referenceDataModal.fields.referenceType')}
          name={FormFields.REFERENCE_TYPE}
          rules={[
            {
              required: true,
              message: t('referenceDataModal.validation.referenceTypeRequired'),
            },
          ]}
        >
          <Select
            className={styles['reference-data-modal__select']}
            size='large'
            options={referenceTypeOptions}
            placeholder={t('createUserModal.fields.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
          />
        </Item>

        {isCrossingMethod && (
          <Item
            label={t('referenceDataModal.fields.communicationType')}
            name={FormFields.COMMUNICATION_TYPE}
            rules={[
              {
                required: true,
                message: t('referenceDataModal.validation.communicationTypeRequired'),
              },
            ]}
          >
            <Select
              className={styles['reference-data-modal__select']}
              size='large'
              options={mockCommunicationTypeOptions}
              placeholder={t('createUserModal.fields.selectPlaceholder')}
              suffixIcon={<IconDownArrow />}
            />
          </Item>
        )}

        {isTechnicalParameter && (
          <>
            <div className={styles['reference-data-modal__row']}>
              <Item
                label={t('referenceDataModal.fields.communicationType')}
                name={FormFields.COMMUNICATION_TYPE}
                rules={[
                  {
                    required: true,
                    message: t('referenceDataModal.validation.communicationTypeRequired'),
                  },
                ]}
              >
                <Select
                  className={styles['reference-data-modal__select']}
                  size='large'
                  options={mockCommunicationTypeOptions}
                  placeholder={t('createUserModal.fields.selectPlaceholder')}
                  suffixIcon={<IconDownArrow />}
                />
              </Item>

              <Item
                label={t('referenceDataModal.fields.crossingMethod')}
                name={FormFields.CROSSING_METHOD}
                rules={[
                  {
                    required: true,
                    message: t('referenceDataModal.validation.crossingMethodRequired'),
                  },
                ]}
              >
                <Select
                  className={styles['reference-data-modal__select']}
                  size='large'
                  options={mockCrossingMethodOptions}
                  placeholder={t('createUserModal.fields.selectPlaceholder')}
                  suffixIcon={<IconDownArrow />}
                />
              </Item>
            </div>
            <div className={styles['reference-data-modal__row']}>
              <Item
                label={t('referenceDataModal.fields.name')}
                name={FormFields.NAME}
              >
                <Input
                  size='large'
                  placeholder={t('referenceDataModal.fields.namePlaceholder')}
                />
              </Item>

              <Item
                label={t('referenceDataModal.fields.measurementUnit')}
                name={FormFields.MEASUREMENT_UNIT}
              >
                <Input
                  size='large'
                  placeholder={t('referenceDataModal.fields.measurementUnitPlaceholder')}
                />
              </Item>
            </div>
          </>
        )}

        {!isTechnicalParameter && (
          <Item
            label={t('referenceDataModal.fields.name')}
            name={FormFields.NAME}
          >
            <Input
              size='large'
              placeholder={t('referenceDataModal.fields.namePlaceholder')}
            />
          </Item>
        )}

        {isTechnicalParameter && (
          <>
            <div className={styles['reference-data-modal__checkbox-row']}>
              <Item
                className={styles['reference-data-modal__checkbox-item']}
                name={FormFields.HAS_MULTIPLE_OPTIONS}
                valuePropName='checked'
              >
                <Checkbox className={styles['reference-data-modal__checkbox']}>
                  {t('referenceDataModal.fields.hasMultipleOptions')}
                </Checkbox>
              </Item>

              {hasMultipleOptions && (
                <Button
                  className={styles['reference-data-modal__add-option']}
                  type='default'
                  icon={<IconPlus />}
                  onClick={handleAddOption}
                >
                  {t('referenceDataModal.actions.addOption')}
                </Button>
              )}
            </div>

            {hasMultipleOptions && (
              <List
                name={FormFields.OPTIONS}
                initialValue={['']}
              >
                {(fields, { remove }) => (
                  <div className={styles['reference-data-modal__options']}>
                    {fields.map(({ key, name, ...restField }, index) => (
                      <div key={key} className={styles['reference-data-modal__option-row']}>
                        <Item
                          {...restField}
                          name={name}
                          className={styles['reference-data-modal__option-input']}
                        >
                          <Input
                            placeholder={t('referenceDataModal.fields.optionPlaceholder', {
                              index: index + 1,
                            })}
                          />
                        </Item>
                        {index > 0 ? (
                          <Button
                            className={styles['reference-data-modal__option-delete']}
                            type='primary'
                            danger
                            size='large'
                            icon={<IconTrash />}
                            onClick={() => remove(name)}
                          />
                        ) : (
                          <span
                            className={styles['reference-data-modal__option-spacer']}
                            aria-hidden='true'
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </List>
            )}
          </>
        )}
      </Form>
    </Modal>
  );
};

export default ReferenceDataModal;
