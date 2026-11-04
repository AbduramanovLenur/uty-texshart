export const leaveConfirmState = {
  SKIP: 'skipLeaveConfirm',
} as const;

export const skipLeaveConfirmState = {
  [leaveConfirmState.SKIP]: true,
} as const;
