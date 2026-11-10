import type { UserStatuses } from '../constants/user-statuses';

export type TUserStatus = (typeof UserStatuses)[keyof typeof UserStatuses];

export interface IUserStatusTagConfig {
  bg: string;
  color: string;
  borderColor: string;
  labelKey: string;
}
