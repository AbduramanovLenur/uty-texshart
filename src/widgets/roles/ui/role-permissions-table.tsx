import type { FC } from 'react';
import { Table, Tag, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { mockModules } from '../model/mock';
import type { IPermissionModule, IRole } from '../model/types/role';
import { useGetColumns } from './columns';

import styles from './role-permissions-table.module.scss';

const { Title } = Typography;

interface IProps {
  role: IRole;
}

const RolePermissionsTable: FC<IProps> = ({ role }) => {
  const { t } = useTranslation();
  const columns = useGetColumns(role);

  return (
    <div className={cn(styles['role-permissions'])}>
      <div className={cn(styles['role-permissions__header'])}>
        <Title className={cn(styles['role-permissions__title'])} level={4}>
          {role.name}
        </Title>
        {role.is_system && (
          <Tag className={cn(styles['role-permissions__badge'])}>
            {t('roles.systemRole')}
          </Tag>
        )}
      </div>
      <div className={cn(styles['role-permissions__body'], 'scrollbar')}>
        <Table<IPermissionModule>
          rowKey='id'
          className={cn(styles['role-permissions__table'])}
          dataSource={mockModules}
          columns={columns}
          pagination={false}
          scroll={{ x: 'max-content' }}
        />
      </div>
    </div>
  );
};

export default RolePermissionsTable;
