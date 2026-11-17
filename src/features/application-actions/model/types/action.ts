import type { ReactNode } from 'react';

import type { ApplicationActionKeys } from '../constants/action-keys';

import type { TPermission } from '@entities/profile';
import type { TStatus } from '@shared/types';

export type TApplicationActionKey = (typeof ApplicationActionKeys)[keyof typeof ApplicationActionKeys];

export type TApplicationActionHandler = (key: TApplicationActionKey) => void;

export interface IApplicationActionConfig {
  key: TApplicationActionKey;
  labelKey: string;
  icon: ReactNode;
  className: string;
  allowedStatuses: readonly TStatus[];
  requiredPermissions: readonly TPermission[];
}
