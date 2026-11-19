import type { FC } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IModule, IRole } from '../model/types/role';

import { IconCircleInformation, IconDownArrow } from '@shared/assets';

import styles from './roles-sidebar.module.scss';

interface IProps {
  roles: IRole[];
  selectedRoleId: number;
  onSelectRole: (roleId: number) => void;
  modules: IModule[];
  selectedModuleKey: string;
  onSelectModule: (moduleKey: string) => void;
}

const RolesSidebar: FC<IProps> = ({
  roles,
  selectedRoleId,
  onSelectRole,
  modules,
  selectedModuleKey,
  onSelectModule,
}) => {
  const { t } = useTranslation();

  const selectedRole = roles.find((r) => r.id === selectedRoleId) ?? roles[0];

  return (
    <aside className={cn(styles['roles-sidebar'])}>
      <Select
        className={cn(styles['roles-sidebar__select'])}
        size='large'
        suffixIcon={<IconDownArrow />}
        value={selectedRoleId}
        onChange={onSelectRole}
        options={roles.map((role) => ({
          value: role.id,
          label: role.name,
        }))}
      />

      <div className={cn(styles['roles-sidebar__info'])}>
        <span className={cn(styles['roles-sidebar__info-icon'])}>
          <IconCircleInformation />
        </span>
        <span className={cn(styles['roles-sidebar__info-text'])}>
          {selectedRole?.description}
        </span>
      </div>

      <div className={cn(styles['roles-sidebar__heading'])}>
        {t('roles.actions')}
      </div>

      <ul className={cn(styles['roles-sidebar__modules'], 'scrollbar')}>
        {modules.map((module) => {
          const isActive = module.module === selectedModuleKey;

          return (
           <li key={module.module}>
             <button
                className={cn(styles['roles-sidebar__module-btn'], {
                  [styles['is-active']]: isActive,
                })}
                type='button'
                onClick={() => onSelectModule(module.module)}
              >
                {module.name}
              </button>
           </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default RolesSidebar;
