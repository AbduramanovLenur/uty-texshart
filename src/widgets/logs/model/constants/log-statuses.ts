export const LogStatuses = {
  VIEW: 'VIEW',
  CREATE: 'CREATE',
  MODIFY: 'MODIFY',
} as const;

export type TLogStatus = (typeof LogStatuses)[keyof typeof LogStatuses];
