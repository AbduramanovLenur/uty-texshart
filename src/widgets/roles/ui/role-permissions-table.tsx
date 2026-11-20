import type { FC } from 'react';
import { Table, Typography } from 'antd';
import cn from 'classnames';

import type { IModule, IPermissionItem, IRole } from '../model/types/role';
import { useGetColumns } from './columns';

import styles from './role-permissions-table.module.scss';

const { Title } = Typography;

interface IProps {
  role?: IRole;
  module?: IModule;
}

const RolePermissionsTable: FC<IProps> = ({ role, module }) => {
  const columns = useGetColumns(role, module);

  return (
    <div className={cn(styles['role-permissions'])}>
      {module && (
        <div className={cn(styles['role-permissions__header'])}>
          <Title className={cn(styles['role-permissions__title'])} level={5}>
            {module.name}
          </Title>
        </div>
      )}
      <div className={cn(styles['role-permissions__body'], 'scrollbar')}>
        <Table<IPermissionItem>
          rowKey='key'
          className={cn(styles['role-permissions__table'])}
          dataSource={module?.permissions ?? []}
          columns={columns}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default RolePermissionsTable;
