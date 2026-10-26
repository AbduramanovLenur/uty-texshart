import type { FC } from 'react';

import { NotificationButton } from '@features/notifications-button';
import { SearchInput } from '@shared/ui';

import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__inner']}>
        <div className={styles['header__name']}>
          New World MCHJ
        </div>
        <SearchInput
          className={styles['header__search']}
          placeholder='Qidiruv'
        />
        <NotificationButton />
      </div>
    </header>
  );
};

export default Header;
