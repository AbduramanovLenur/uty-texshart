import type { FC } from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IModule, IRole } from '../model/types/role';

import { IconCircleInformation, IconDownArrow } from '@shared/assets';

import styles from './roles-sidebar.module.scss';

interface IProps {
  roles: IRole[];
  selectedRole?: IRole;
  onSelectRole: (roleId: number) => void;

  modules: IModule[];
  selectedModule?: IModule;
  onSelectModule: (moduleKey: string) => void;
}

const RolesSidebar: FC<IProps> = ({
  roles,
  selectedRole,
  onSelectRole,

  modules,
  selectedModule,
  onSelectModule,
}) => {
  const { t } = useTranslation();
  const rolesOptions = roles.map((role) => ({ value: role.id, label: role.name }));

  return (
    <aside className={cn(styles['roles-sidebar'])}>
      <Select
        className={cn(styles['roles-sidebar__select'])}
        size='large'
        suffixIcon={<IconDownArrow />}
        value={selectedRole?.id}
        onChange={onSelectRole}
        options={rolesOptions}
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
          const isActive = module.module === selectedModule?.module;

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
