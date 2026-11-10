import type { ReactNode } from 'react';
import type { BlockerFunction } from 'react-router-dom';

export interface ILeaveConfirmModalProps {
  when?: boolean | BlockerFunction;
  open?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  leaveText?: ReactNode;
  continueText?: ReactNode;
  onLeave?: () => void;
  onStay?: () => void;
}

