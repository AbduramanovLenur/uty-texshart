import { useState } from 'react';
import type { FC } from 'react';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { modules, roles } from '../model/mock';
import RolesSidebar from './roles-sidebar';
import RolePermissionsTable from './role-permissions-table';

import { IconPlus } from '@shared/assets';

import styles from './roles.module.scss';

const { Title } = Typography;

const Roles: FC = () => {
  const { t } = useTranslation();

  const [selectedRoleId, setSelectedRoleId] = useState<number>(roles[0]!.id);
  const [selectedModuleKey, setSelectedModuleKey] = useState<string>(modules[0]!.module);

  const selectedRole = roles.find((role) => role.id === selectedRoleId);
  const selectedModule = modules.find((module) => module.module === selectedModuleKey);

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
            selectedRoleId={selectedRoleId}
            onSelectRole={setSelectedRoleId}
            modules={modules}
            selectedModuleKey={selectedModuleKey}
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
