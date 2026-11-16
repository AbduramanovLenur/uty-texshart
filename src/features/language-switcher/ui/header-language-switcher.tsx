import type { FC } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useHeaderLanguageOptions } from '../model/config/header-language-options';
import { defaultLanguage } from '@shared/config';
import type { Language } from '@shared/types';
import { IconDownArrow } from '@shared/assets';

import styles from './header-language-switcher.module.scss';

interface IProps {
  className?: string;
}

const HeaderLanguageSwitcher: FC<IProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const options = useHeaderLanguageOptions();

  const handleChange = (value: Language) => {
    if (value === i18n.language) {
      return;
    }

    i18n.changeLanguage(value).then(() => window.location.reload());
  };

  return (
    <Select<Language>
      className={cn(styles['header-language-switcher'], className)}
      size='large'
      suffixIcon={<IconDownArrow />}
      options={options}
      value={(i18n.language as Language) || defaultLanguage}
      onChange={handleChange}
    />
  );
};

export default HeaderLanguageSwitcher;
