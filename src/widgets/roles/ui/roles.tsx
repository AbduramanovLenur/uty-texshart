import { useState } from 'react';
import type { FC } from 'react';
import { Button, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { mockRoles } from '../model/mock';
import RolesList from './roles-list';
import RolePermissionsTable from './role-permissions-table';

import { IconPlus } from '@shared/assets';

import styles from './roles.module.scss';

const { Title } = Typography;

const Roles: FC = () => {
  const { t } = useTranslation();
  const [selectedRoleId, setSelectedRoleId] = useState<number>(mockRoles[0]?.id ?? 0);

  const selectedRole = mockRoles.find((role) => role.id === selectedRoleId) ?? mockRoles[0];

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
          <RolesList
            roles={mockRoles}
            activeRoleId={selectedRole?.id ?? 0}
            onSelect={setSelectedRoleId}
          />
          {selectedRole && <RolePermissionsTable role={selectedRole} />}
        </div>
      </div>
    </section>
  );
};

export default Roles;
