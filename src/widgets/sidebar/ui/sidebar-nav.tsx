import type { FC } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Role, TMenuGroup } from '@shared/types';
import { roles } from '@shared/config';
import { hasRoleAccess } from '@shared/utils';

import { items as defaultItems } from '../model/config/menu-items';

import styles from './sidebar-nav.module.scss';

interface IProps {
  items?: TMenuGroup[];
  userRoles?: Role | Role[];
}

const SidebarNav: FC<IProps> = ({
  items = defaultItems,
  userRoles = [roles.APPLICANT],
}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const activeRoles = Array.isArray(userRoles) ? userRoles : [userRoles];

  const accessibleGroups = items.reduce<TMenuGroup[]>((acc, group) => {
    if (!hasRoleAccess(group.roles, activeRoles)) return acc;

    const visibleItems = group.items.filter((item) => hasRoleAccess(item.roles, activeRoles));
    if (visibleItems.length > 0) {
      acc.push({ ...group, items: visibleItems });
    }

    return acc;
  }, []);

  const visibleGroups = accessibleGroups.map((group) => ({
    key: group.key ?? (typeof group.label === 'string' ? group.label : String(group.items[0]?.key ?? '')),
    label:
      accessibleGroups.length > 1 && typeof group.label === 'string'
        ? t(group.label)
        : accessibleGroups.length > 1
          ? group.label
          : undefined,
    items: group.items.map((item) => ({
      ...item,
      label: typeof item.label === 'string' ? t(item.label) : item.label,
    })),
  }));

  const activeKey = visibleGroups
    .flatMap((group) => group.items)
    .find((item) => item.key && (pathname === item.key || pathname.startsWith(`${item.key}/`)))
    ?.key;

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <nav className={styles['menu']}>
      {visibleGroups.map((group) => (
        <div key={group.key} className={styles['menu__group']}>
          {group.label && <span className={styles['menu__label']}>{group.label}</span>}
          <Menu
            classNames={{
              root: styles['menu__list'],
              item: styles['menu__item'],
              itemContent: styles['menu__item-content'],
            }}
            items={group.items}
            selectedKeys={activeKey ? [String(activeKey)] : []}
            onClick={handleMenuClick}
          />
        </div>
      ))}
    </nav>
  );
};

export default SidebarNav;
