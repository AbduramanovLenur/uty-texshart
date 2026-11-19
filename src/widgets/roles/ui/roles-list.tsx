import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IRole } from '../model/types/role';

import styles from './roles-list.module.scss';

interface IProps {
  roles: IRole[];
  activeRoleId: number;
  onSelect: (roleId: number) => void;
}

const RolesList: FC<IProps> = ({ roles, activeRoleId, onSelect }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['roles-list'], 'scrollbar')}>
      <ul className={cn(styles['roles-list__items'])}>
        {roles.map((role) => {
          const isActive = role.id === activeRoleId;

          return (
            <li key={role.id} className={cn(styles['roles-list__item'])}>
              <button
                type='button'
                className={cn(styles['roles-list__button'], {
                  [styles['is-active']]: isActive,
                })}
                onClick={() => onSelect(role.id)}
              >
                <span className={cn(styles['roles-list__name'])}>{role.name}</span>
                <span className={cn(styles['roles-list__meta'])}>
                  {t('roles.usersCount', { count: role.user_count })}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RolesList;
