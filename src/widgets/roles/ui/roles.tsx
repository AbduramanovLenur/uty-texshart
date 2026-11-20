import { useState } from 'react';
import type { FC } from 'react';
import { Button, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { modules, roles } from '../model/mock';
import RolesSidebar from './roles-sidebar';
import RolePermissionsTable from './role-permissions-table';

import { CreateRoleModal, open as openCreateRoleModal } from '@features/create-role-modal';
import { IconPlus } from '@shared/assets';

import styles from './roles.module.scss';

const { Title } = Typography;

const Roles: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [selectedRoleId, setSelectedRoleId] = useState<number | undefined>(() => roles[0]?.id);
  const [selectedModuleKey, setSelectedModuleKey] = useState<string | undefined>(() => modules[0]?.module);

  const selectedRole = roles.find((role) => role.id === selectedRoleId);
  const selectedModule = modules.find((module) => module.module === selectedModuleKey);

  const handleOpenCreateModal = () => {
    dispatch(openCreateRoleModal());
  };

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
            onClick={handleOpenCreateModal}
          >
            {t('roles.create')}
          </Button>
        </div>
        <div className={cn(styles['roles__body'])}>
          <RolesSidebar
            roles={roles}
            selectedRole={selectedRole}
            onSelectRole={setSelectedRoleId}
            modules={modules}
            selectedModule={selectedModule}
            onSelectModule={setSelectedModuleKey}
          />
          <RolePermissionsTable
            role={selectedRole}
            module={selectedModule}
          />
        </div>
        <CreateRoleModal />
      </div>
    </section>
  );
};

export default Roles;
