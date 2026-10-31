import type { FC } from 'react';
import { Form, Select, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { IconDownArrow } from '@shared/assets';

import { ImageUpload } from '@features/image-upload';

import styles from './create-application-form.module.scss';

const { Item } = Form;
const { TextArea } = Input;

const CreateApplicationForm: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['create-application-form']}>
      <div className={styles['create-application-form__left']}>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.communicationType')}
          name='field1'
          rules={[{
            required: true,
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            placeholder={t('createApplication.form.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
          />
        </Item>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.crossingMethod')}
          name='field2'
          rules={[{
            required: true,
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
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
              name='voltage'
              rules={[{
                required: true,
              }]}
            >
              <Select
                className={styles['create-application-form__parameters-select']}
                placeholder='Tanlang'
                suffixIcon={<IconDownArrow />}
              />
            </Item>
            <Item
              className={styles['create-application-form__parameters-item']}
              label='Kabellar soni'
              name='cablesCount'
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
              name='cableBrand'
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
              name='workMethod'
              rules={[{
                required: true,
              }]}
            >
              <Select
                className={styles['create-application-form__parameters-select']}
                placeholder='Tanlang'
                suffixIcon={<IconDownArrow />}
              />
            </Item>
          </div>
        </div>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.projectGoal')}
          name='field3'
          rules={[{
            required: true,
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            placeholder={t('createApplication.form.selectPlaceholder')}
            suffixIcon={<IconDownArrow />}
          />
        </Item>
      </div>
      <div className={styles['create-application-form__right']}>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.locationPhotos')}
          name='locationPhotos'
        >
          <ImageUpload />
        </Item>
        <Item
          className={styles['create-application-form__item']}
          label={t('createApplication.form.comment')}
          name='comment'
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
