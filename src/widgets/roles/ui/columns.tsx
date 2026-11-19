import { Checkbox } from 'antd';
import type { TableProps } from 'antd';
import { useTranslation } from 'react-i18next';

import type {
  IPermissionChangePayload,
  IPermissionModule,
  IRole,
} from '../model/types/role';

import { PERMISSION_LIST } from '@entities/profile';
import type { TAction, TPermission } from '@entities/profile';

export const useGetColumns = (role: IRole): TableProps<IPermissionModule>['columns'] => {
  const { t } = useTranslation();

  const handlePermissionChange = (
    permission: string,
    action: TAction,
    permissionKey: TPermission,
    value: boolean,
  ) => {
    const payload: IPermissionChangePayload = {
      roleId: role.id,
      permission,
      action,
      permissionKey,
      value,
    };

    console.log(payload);
  };

  return [
    {
      title: t('roles.headers.module'),
      dataIndex: 'name',
      key: 'module',
      minWidth: 180,
    },
    ...PERMISSION_LIST.map((permissionKey) => ({
      title: t(`roles.headers.${permissionKey}`),
      key: permissionKey,
      align: 'center' as const,
      width: 100,
      render: (_: unknown, module: IPermissionModule) => {
        if (!module.permissions.includes(permissionKey)) {
          return null;
        }

        const permission = `${module.id}.${permissionKey}`;
        const checked = role.permissions.includes(permission);

        return (
          <Checkbox
            key={`${role.id}-${permission}`}
            defaultChecked={checked}
            disabled={!role.permissions_editable}
            onChange={(event) =>
              handlePermissionChange(
                permission,
                module.id,
                permissionKey,
                event.target.checked,
              )
            }
          />
        );
      },
    })),
  ];
};
