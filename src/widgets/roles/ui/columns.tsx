import type { TableProps } from 'antd';
import { Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';

import type { IModule, IPermissionItem, IRole } from '../model/types/role';

export const useGetColumns = (role?: IRole, module?: IModule): TableProps<IPermissionItem>['columns'] => {
  const { t } = useTranslation();

  const handlePermissionChange = (permission: string, value: boolean) => {
    if (!role || !module) return;

    const payload = {
      roleId: role.id,
      permission,
      module: module.module,
      value,
    };

    console.log(payload);
  };

  return [
    {
      title: t('roles.headers.module'),
      width: '50%',
      render: (_, record) => record.label,
    },
    {
      title: t('roles.headers.permission'),
      width: '50%',
      render: (_, record: IPermissionItem) => {
        const checked = Boolean(role?.permissions?.includes(record.key));

        return (
          <Checkbox
            key={`${role?.id}-${record.key}`}
            defaultChecked={checked}
            disabled={!role?.permissions_editable}
            onChange={(event) => handlePermissionChange(record.key, event.target.checked)}
          />
        );
      },
    },
  ];
};
