import type { ReactNode } from 'react';
import type { BlockerFunction } from 'react-router-dom';

export const SKIP_LEAVE_CONFIRM = { skipLeaveConfirm: true } as const;

export interface LeaveConfirmModalProps {
  /**
   * Whether navigation blocking is enabled or a custom blocker function.
   * Defaults to `true`.
   */
  when?: boolean | BlockerFunction;
  /**
   * Optional manual override for modal open state.
   * If omitted, modal visibility is controlled automatically by the blocker.
   */
  open?: boolean;
  /** Modal title. Defaults to i18n or "Chiqmoqchimisiz?" */
  title?: ReactNode;
  /** Modal description text. Defaults to i18n or "Arizada siz to'ldirgan ma'lumotlaringiz o'chib ketadi" */
  description?: ReactNode;
  /** Text for the leave/close button (left). Defaults to i18n or "Yopish" */
  leaveText?: ReactNode;
  /** Text for the stay/continue button (right). Defaults to i18n or "Davom etish" */
  continueText?: ReactNode;
  /** Callback fired when the user confirms leaving */
  onLeave?: () => void;
  /** Callback fired when the user chooses to stay */
  onStay?: () => void;
}

export interface UseLeaveConfirmOptions {
  /**
   * Condition to activate blocking.
   * Can be boolean or custom BlockerFunction. Defaults to `true`.
   */
  when?: boolean | BlockerFunction;
  /** Callback fired when leaving is confirmed */
  onLeave?: () => void;
  /** Callback fired when staying is chosen */
  onStay?: () => void;
}
