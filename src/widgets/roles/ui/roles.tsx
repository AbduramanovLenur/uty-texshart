import { useState } from 'react';
import type { FC } from 'react';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Modules } from '@entities/profile';

import { modules, roles } from '../model/mock';
import RolesSidebar from './roles-sidebar';
import RolePermissionsTable from './role-permissions-table';

import { IconPlus } from '@shared/assets';

import styles from './roles.module.scss';

const { Title } = Typography;

const Roles: FC = () => {
  const { t } = useTranslation();
  const initialRole = roles[0];
  const defaultModule = modules.find((m) => m.module === Modules.APPLICATION)?.module ?? modules[0]?.module ?? '';

  const [selectedRoleId, setSelectedRoleId] = useState<number>(initialRole?.id ?? 0);
  const [selectedModuleKey, setSelectedModuleKey] = useState<string>(defaultModule);

  const selectedRole = roles.find((role) => role.id === selectedRoleId) ?? roles[0];
  const selectedModule = modules.find((mod) => mod.module === selectedModuleKey) ?? modules[0];

  return (
    <section className={cn(styles['roles'], 'section')}>
      <div className={cn(styles['roles__inner'], 'section-inner')}>
        <div className={cn(styles['roles__top'], 'section-top')}>
          <Title className={cn(styles['roles__title'], 'section-title')} level={3}>
            {t('roles.title')}
          </Title>
          <Button
            className={cn(styles['roles__create'], 'create-btn')}
            type='primary'
            icon={<IconPlus />}
          >
            {t('roles.create')}
          </Button>
        </div>
        <div className={cn(styles['roles__body'])}>
          <RolesSidebar
            roles={roles}
            selectedRoleId={selectedRole?.id ?? 0}
            onSelectRole={setSelectedRoleId}
            modules={modules}
            selectedModuleKey={selectedModule?.module ?? ''}
            onSelectModule={setSelectedModuleKey}
          />
          {selectedRole && selectedModule && (
            <RolePermissionsTable
              role={selectedRole}
              module={selectedModule}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Roles;
