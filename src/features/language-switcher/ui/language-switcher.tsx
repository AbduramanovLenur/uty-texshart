import type { FC } from 'react';
import { Segmented } from 'antd';
import { useTranslation } from 'react-i18next';

import { useLanguageOptions } from '../model/useLanguageOptions';

import { defaultLanguage } from '@shared/config';

import styles from './language-switcher.module.scss';

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const options = useLanguageOptions();

  return (
    <Segmented
      classNames={{
        root: styles['language-switcher'],
        item: styles['language-switcher__item'],
        label: styles['language-switcher__label'],
      }}
      options={options}
      value={i18n.language || defaultLanguage}
      onChange={(value) => void i18n.changeLanguage(String(value))}
    />
  );
};

export default LanguageSwitcher;
