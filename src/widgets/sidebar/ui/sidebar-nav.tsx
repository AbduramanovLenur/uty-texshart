import type { FC } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { TMenuItem } from '@shared/types';

import { items } from '../model/menu-items';

import styles from './sidebar-nav.module.scss';

const SidebarNav: FC = () => {
  const { t: translate } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menuItems: TMenuItem[] = items.map((item) => ({
    ...item,
    label: typeof item.label === 'string' ? translate(item.label) : item.label,
  }));

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <nav className={styles['menu']}>
      <Menu
        classNames={{
          root: styles['menu__list'],
          item: styles['menu__item'],
          itemIcon: styles['menu__item-icon'],
          itemContent: styles['menu__item-content'],
        }}
        items={menuItems}
        selectedKeys={[pathname]}
        onClick={handleMenuClick}
      />
    </nav>
  );
};

export default SidebarNav;
