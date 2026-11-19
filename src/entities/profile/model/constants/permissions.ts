export const Permissions = {
  VIEW: 'view',
  CREATE: 'create',
  EDIT: 'edit',
  DELETE: 'delete',
  APPROVE: 'approve',
  REJECT: 'reject',
} as const;

export const PERMISSION_LIST = [
  Permissions.VIEW,
  Permissions.CREATE,
  Permissions.EDIT,
  Permissions.DELETE,
  Permissions.APPROVE,
  Permissions.REJECT,
] as const;
