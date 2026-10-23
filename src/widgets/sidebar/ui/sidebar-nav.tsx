import type { FC } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { items } from '../model/menu-items';

import styles from './sidebar-nav.module.scss';

const SidebarNav: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      classNames={{
        root: styles['menu'],
        item: styles['menu__item'],
        itemIcon: styles['menu__item-icon'],
        itemContent: styles['menu__item-content'],
      }}
      items={items}
      selectedKeys={[pathname]}
      onClick={handleMenuClick}
    />
  );
};

export default SidebarNav;
