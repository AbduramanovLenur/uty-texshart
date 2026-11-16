import type { FC } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useLanguageOptions } from '../model/config/language-options';
import { defaultLanguage } from '@shared/config';
import type { Language } from '@shared/types';
import { IconDownArrow } from '@shared/assets';

import styles from './language-switcher.module.scss';

interface IProps {
  className?: string;
}

const LanguageSwitcher: FC<IProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const options = useLanguageOptions();

  const handleChange = (value: Language) => {
    if (value === i18n.language) {
      return;
    }

    i18n.changeLanguage(value).then(() => window.location.reload());
  };

  return (
    <Select<Language>
      className={cn(styles['language-switcher'], className)}
      variant='borderless'
      suffixIcon={<IconDownArrow />}
      options={options}
      value={(i18n.language as Language) || defaultLanguage}
      onChange={handleChange}
    />
  );
};

export default LanguageSwitcher;
