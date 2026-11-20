import { IconBasicCheck, IconFullRightArrow, IconXMark } from '@shared/assets';
import { Statuses } from '@shared/config';

import { ApplicationActionKeys } from '../constants/action-keys';
import type { IApplicationActionConfig } from '../types/action';

export const actionsConfig: IApplicationActionConfig[] = [
  {
    key: ApplicationActionKeys.REJECT,
    labelKey: 'actions.reject',
    icon: <IconXMark />,
    className: 'application-actions__btn--reject',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.FORWARD,
    labelKey: 'actions.forwardToRegional',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.CONFIRM_ACT,
    labelKey: 'actions.confirmAct',
    icon: <IconBasicCheck />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.ASSIGN_EMPLOYEE,
    labelKey: 'actions.assignEmployee',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.ISSUE_TECHNICAL_SPECIFICATION,
    labelKey: 'actions.issueTechnicalSpecification',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
] as const;
