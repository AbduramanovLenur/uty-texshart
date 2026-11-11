import type { FC } from 'react';
import { Form, Select, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { IconDownArrow } from '@shared/assets';

import { ImageUpload } from '@features/image-upload';

import { validateLocationPhotos } from '../model/lib/helpers/validators';
import { FormFields } from '../model/constants/form-fields';

import styles from './create-application-form.module.scss';

const { Item } = Form;
const { TextArea } = Input;

const CreateApplicationForm: FC = () => {
  const { t } = useTranslation();

  const testOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  return (
    <div className={styles['create-application-form']}>
      <div className={styles['create-application-form__left']}>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.communicationType')}
          name={FormFields.COMMUNICATION_TYPE}
          rules={[{
            required: true,
            message: t('createApplication.form.validation.communicationType'),
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            options={testOptions}
            placeholder={t('createApplication.form.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
          />
        </Item>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.crossingMethod')}
          name={FormFields.CROSSING_METHOD}
          rules={[{
            required: true,
            message: t('createApplication.form.validation.crossingMethod'),
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            options={testOptions}
            placeholder={t('createApplication.form.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
          />
        </Item>
        <div className={styles['create-application-form__parameters']}>
          <div className={styles['create-application-form__parameters-title']}>
            {t('createApplication.form.parametersTitle')}
          </div>
          <div className={styles['create-application-form__parameters-grid']}>
            <Item
              className={styles['create-application-form__parameters-item']}
              label='Kuchlanish (kV)'
              name={FormFields.VOLTAGE}
              rules={[{
                required: true,
              }]}
            >
              <Select
                className={styles['create-application-form__parameters-select']}
                options={testOptions}
                placeholder='Tanlang'
                suffixIcon={<IconDownArrow />}
              />
            </Item>
            <Item
              className={styles['create-application-form__parameters-item']}
              label='Kabellar soni'
              name={FormFields.CABLE_COUNT}
              rules={[{
                required: true,
              }]}
            >
              <Input
                className={styles['create-application-form__parameters-input']}
                placeholder='Kabellar sonini kiriting'
              />
            </Item>
            <Item
              className={styles['create-application-form__parameters-item']}
              label='Kabel markasi'
              name={FormFields.CABLE_BRAND}
              rules={[{
                required: true,
              }]}
            >
              <Input
                className={styles['create-application-form__parameters-input']}
                placeholder='Kabel markasini kiriting'
              />
            </Item>
            <Item
              className={styles['create-application-form__parameters-item']}
              label='Ishlarni bajarish usuli'
              name={FormFields.WORK_METHOD}
              rules={[{
                required: true,
              }]}
            >
              <Select
                className={styles['create-application-form__parameters-select']}
                options={testOptions}
                placeholder='Tanlang'
                suffixIcon={<IconDownArrow />}
              />
            </Item>
          </div>
        </div>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.projectGoal')}
          name={FormFields.PROJECT_GOAL}
          rules={[{
            required: true,
            message: t('createApplication.form.validation.projectGoal'),
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            options={testOptions}
            placeholder={t('createApplication.form.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
          />
        </Item>
      </div>
      <div className={styles['create-application-form__right']}>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.locationPhotos')}
          name={FormFields.LOCATION_PHOTOS}
          rules={[
            {
              required: true,
              validator: validateLocationPhotos(t),
            },
          ]}
        >
          <ImageUpload />
        </Item>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.comment')}
          name={FormFields.COMMENT}
          rules={[
            {
              whitespace: true,
            },
          ]}
        >
          <TextArea
            className={styles['create-application-form__textarea']}
            placeholder={t('createApplication.form.commentPlaceholder')}
            maxLength={240}
            showCount
          />
        </Item>
      </div>
    </div>
  );
};

export default CreateApplicationForm;
