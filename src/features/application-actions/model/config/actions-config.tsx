import { IconFullRightArrow, IconXMark } from '@shared/assets';
import { Statuses } from '@shared/config';
import { Permissions } from '@entities/profile';

import { ApplicationActionKeys } from '../constants/action-keys';
import type { IApplicationActionConfig } from '../types/action';

export const actionsConfig: IApplicationActionConfig[] = [
  {
    key: ApplicationActionKeys.REJECT,
    labelKey: 'actions.reject',
    icon: <IconXMark />,
    className: 'application-actions__btn--reject',
    allowedStatuses: [Statuses.ACCEPTED],
    requiredPermissions: [Permissions.APPLICATION_REJECT],
  },
  {
    key: ApplicationActionKeys.FORWARD,
    labelKey: 'actions.forwardToRegional',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
    requiredPermissions: [Permissions.APPLICATION_FORWARD],
  },
] as const;
