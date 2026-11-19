import type { TAction, TPermission } from '@entities/profile';

export interface IRole {
  id: number;
  code: string;
  name: string;
  is_system: boolean;
  permissions_editable: boolean;
  user_count: number;
  permissions: string[];
}

export interface IPermissionModule {
  id: TAction;
  name: TAction;
  permissions: TPermission[];
}

export interface IPermissionChangePayload {
  roleId: number;
  permission: string;
  action: TAction;
  permissionKey: TPermission;
  value: boolean;
}
