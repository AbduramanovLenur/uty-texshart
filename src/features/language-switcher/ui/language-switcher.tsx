import type { FC } from 'react';
import { Segmented } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useLanguageOptions } from '../model/config/language-options';

import { defaultLanguage } from '@shared/config';

import styles from './language-switcher.module.scss';

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const options = useLanguageOptions();

  const handleChange = (value: string | number) => {
    const language = String(value);

    if (language === i18n.language) {
      return;
    }

    i18n.changeLanguage(language).then(() => window.location.reload());
  };

  return (
    <Segmented
      classNames={{
        root: cn(styles['language-switcher']),
        item: cn(styles['language-switcher__item']),
        label: cn(styles['language-switcher__label']),
      }}
      options={options}
      value={i18n.language || defaultLanguage}
      onChange={handleChange}
    />
  );
};

export default LanguageSwitcher;
