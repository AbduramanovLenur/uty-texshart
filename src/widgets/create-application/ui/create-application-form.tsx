import type { FC } from 'react';
import { Form, Select, Input } from 'antd';

import { IconDownArrow } from '@shared/assets';

import { ImageUpload } from '@features/image-upload';

import styles from './create-application-form.module.scss';

const { Item } = Form;
const { TextArea } = Input;

const CreateApplicationForm: FC = () => {
  return (
    <div className={styles['create-application-form']}>
      <div className={styles['create-application-form__left']}>
        <Item
          className={styles['create-application-form__item']}
          label='O’tkazilishi rejalashtirilayotgan komunikatsiya turi'
          name='field1'
          rules={[{
            required: true,
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            placeholder='Tanlang'
            suffixIcon={<IconDownArrow />}
          />
        </Item>
        <Item
          className={styles['create-application-form__item']}
          label='Temir yo’ldan o’tkazish turi'
          name='field2'
          rules={[{
            required: true,
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            placeholder='Tanlang'
            suffixIcon={<IconDownArrow />}
          />
        </Item>
        <Item
          className={styles['create-application-form__item']}
          label='Kommunikatsiyani o’tqazish maqsadi'
          name='field3'
          rules={[{
            required: true,
          }]}
        >
          <Select
            className={styles['create-application-form__select']}
            placeholder='Tanlang'
            suffixIcon={<IconDownArrow />}
          />
        </Item>
      </div>
      <div className={styles['create-application-form__right']}>
        <Item
          className={styles['create-application-form__item']}
          label='Kommunikatsiya rejalashtirilayotgan joy rasmi'
          name='locationPhotos'
        >
          <ImageUpload />
        </Item>
        <Item
          className={styles['create-application-form__item']}
          label='Izoh'
          name='comment'
        >
          <TextArea
            className={styles['create-application-form__textarea']}
            placeholder='Yozing'
            maxLength={240}
            showCount
          />
        </Item>
      </div>
    </div>
  );
};

export default CreateApplicationForm;
