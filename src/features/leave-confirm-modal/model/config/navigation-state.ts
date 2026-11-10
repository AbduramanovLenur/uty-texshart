import { LeaveConfirmState } from '../constants/leave-confirm-state';

export const skipLeaveConfirmState = {
  [LeaveConfirmState.SKIP]: true,
} as const;
