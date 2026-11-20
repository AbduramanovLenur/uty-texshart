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
  {
    key: ApplicationActionKeys.ALLOW_CONSTRUCTION,
    labelKey: 'actions.allowConstruction',
    icon: <IconBasicCheck />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.UPLOAD_PROJECT_FILES,
    labelKey: 'actions.uploadProjectFiles',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.GRANT_CONSTRUCTION_PERMIT,
    labelKey: 'actions.grantConstructionPermit',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.START_CONSTRUCTION,
    labelKey: 'actions.startConstruction',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.CONFIRM_CONSTRUCTION_COMPLETION,
    labelKey: 'actions.confirmConstructionCompletion',
    icon: <IconBasicCheck />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
  {
    key: ApplicationActionKeys.UPLOAD_CONSTRUCTION_ACT,
    labelKey: 'actions.uploadConstructionAct',
    icon: <IconFullRightArrow />,
    className: 'application-actions__btn--accept',
    allowedStatuses: [Statuses.ACCEPTED],
  },
] as const;
