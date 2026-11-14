import type { FC } from 'react';
import cn from 'classnames';

import SidebarNav from './sidebar-nav';
import ProfileInfoPopover from './profile-info-popover';

import { ProfileInfo } from '@entities/profile';

import styles from './sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <aside className={cn(styles['sidebar'])}>
      <div className={cn(styles['sidebar__logo'])}>
        <img
          src='/images/svg/logo-primary.svg'
          alt='logo'
          loading='lazy'
          width={160}
          height={40}
        />
      </div>
      <SidebarNav />
      <ProfileInfo>
        <ProfileInfoPopover />
      </ProfileInfo>
    </aside>
  );
};

export default Sidebar;
