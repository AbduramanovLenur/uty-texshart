import type { FC } from 'react';

import styles from './sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <aside className={styles['sidebar']}>
      <div className={styles['sidebar__logo']}>
        <img
          src='/images/svg/logo-primary.svg'
          alt='logo'
          loading='lazy'
          width={187}
          height={43}
        />
      </div>

    </aside>
  );
};

export default Sidebar;
