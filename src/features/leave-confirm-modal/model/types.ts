import type { ReactNode } from 'react';
import type { BlockerFunction } from 'react-router-dom';

import type { leaveConfirmState } from './navigation-state';

export type TLeaveConfirmState =
  (typeof leaveConfirmState)[keyof typeof leaveConfirmState];

export type TSkipLeaveConfirmState = Record<TLeaveConfirmState, true>;

export interface LeaveConfirmModalProps {
  when?: boolean | BlockerFunction;
  open?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  leaveText?: ReactNode;
  continueText?: ReactNode;
  onLeave?: () => void;
  onStay?: () => void;
}

export interface UseLeaveConfirmOptions {
  when?: boolean | BlockerFunction;
  onLeave?: () => void;
  onStay?: () => void;
}
