import type { TableProps } from 'antd';
import { Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';

import type { IModule, IPermissionChangePayload, IPermissionItem, IRole } from '../model/types/role';

import styles from './role-permissions-table.module.scss';

export const useGetColumns = (
  role: IRole,
  module: IModule,
): TableProps<IPermissionItem>['columns'] => {
  const { t } = useTranslation();

  const handlePermissionChange = (permissionKey: string, value: boolean) => {
    const action = permissionKey.includes('.') ? permissionKey.split('.')[1] : permissionKey;

    const payload: IPermissionChangePayload = {
      roleId: role.id,
      permissionId: permissionKey,
      moduleId: module.module,
      action,
      value,
    };

    console.log(payload);
  };

  return [
    {
      title: t('roles.headers.module'),
      width: '50%',
      render: (_, record) => (
        <span className={styles['role-permissions__action-name']}>
          {record.label}
        </span>
      ),
    },
    {
      title: t('roles.headers.permission'),
      width: '50%',
      render: (_: unknown, record: IPermissionItem) => {
        const checked = role.permissions.includes(record.key);

        return (
          <Checkbox
            key={`${role.id}-${record.key}`}
            defaultChecked={checked}
            disabled={!role.permissions_editable}
            onChange={(event) =>
              handlePermissionChange(record.key, event.target.checked)
            }
          />
        );
      },
    },
  ];
};
