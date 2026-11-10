import type { BlockerFunction } from 'react-router-dom';

export interface IUseLeaveConfirmOptions {
  when?: boolean | BlockerFunction;
  onLeave?: () => void;
  onStay?: () => void;
}
