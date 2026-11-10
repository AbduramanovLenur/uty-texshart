import { UserStatuses } from '../constants/user-statuses';
import type { IUserStatusTagConfig, TUserStatus } from '../types/user-status';

export const userStatusTagConfig: Record<TUserStatus, IUserStatusTagConfig> = {
  [UserStatuses.ACTIVE]: {
    bg: 'var(--ant-cyan-6)',
    color: 'var(--white)',
    borderColor: 'transparent',
    labelKey: 'userStatuses.active',
  },
  [UserStatuses.INACTIVE]: {
    bg: 'var(--ant-volcano)',
    color: 'var(--white)',
    borderColor: 'transparent',
    labelKey: 'userStatuses.inactive',
  },
};
