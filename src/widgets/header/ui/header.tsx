import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NotificationButton } from '@features/notifications-button';
import { SearchInput } from '@shared/ui';

import styles from './header.module.scss';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles['header']}>
      <div className={styles['header__inner']}>
        <div className={styles['header__name']}>
          New World MCHJ
        </div>
        <SearchInput
          className={styles['header__search']}
          placeholder={t('header.searchPlaceholder')}
        />
        <NotificationButton />
      </div>
    </header>
  );
};

export default Header;
