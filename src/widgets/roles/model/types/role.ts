import type { TModule, TPermission } from '@entities/profile';

export interface IPermissionItem {
  key: TPermission;
  label: string;
  disabled?: boolean;
}

export interface IModule {
  name: string;
  module: TModule;
  permissions: IPermissionItem[];
}

export interface IRole {
  id: number;
  code: string;
  name: string;
  description: string;
  is_system: boolean;
  permissions_editable: boolean;
  user_count: number;
  permissions: TPermission[];
  created_at: string;
  updated_at: string | null;
}
