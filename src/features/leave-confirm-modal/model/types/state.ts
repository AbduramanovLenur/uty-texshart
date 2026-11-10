import type { LeaveConfirmState } from '../constants/leave-confirm-state';

export type TLeaveConfirmState = (typeof LeaveConfirmState)[keyof typeof LeaveConfirmState];
export type TSkipLeaveConfirmState = Record<TLeaveConfirmState, true>;
