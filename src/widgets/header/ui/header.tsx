import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { NotificationButton } from '@features/notifications-button';
import { HeaderLanguageSwitcher } from '@features/language-switcher';
import { SearchInput } from '@shared/ui';

import styles from './header.module.scss';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={cn(styles['header'])}>
      <div className={cn(styles['header__inner'])}>
        <div className={cn(styles['header__name'])}>
          New World MCHJ
        </div>
        <SearchInput
          className={cn(styles['header__search'])}
          placeholder={t('header.searchPlaceholder')}
        />
        <HeaderLanguageSwitcher />
        <NotificationButton />
      </div>
    </header>
  );
};

export default Header;
