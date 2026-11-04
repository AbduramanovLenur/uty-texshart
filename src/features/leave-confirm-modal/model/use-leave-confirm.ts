import { useEffect } from 'react';
import { useBlocker, type BlockerFunction } from 'react-router-dom';

import { blockerState } from './blocker-state';
import { leaveConfirmState } from './navigation-state';
import type { TSkipLeaveConfirmState, UseLeaveConfirmOptions } from './types';

const isSkipLeaveConfirmState = (
  state: unknown,
): state is TSkipLeaveConfirmState => {
  if (typeof state !== 'object' || state === null) {
    return false;
  }

  return (state as Partial<TSkipLeaveConfirmState>)[leaveConfirmState.SKIP] === true;
};

export const useLeaveConfirm = (options: UseLeaveConfirmOptions = {}) => {
  const { when = true, onLeave, onStay } = options;

  const shouldBlock: BlockerFunction = (args) => {
    if (isSkipLeaveConfirmState(args.nextLocation.state)) {
      return false;
    }

    if (typeof when === 'function') {
      return when(args);
    }

    if (!when) {
      return false;
    }

    return args.currentLocation.pathname !== args.nextLocation.pathname;
  };

  const blocker = useBlocker(shouldBlock);

  const isOpen = blocker.state === blockerState.BLOCKED;

  const handleLeave = () => {
    onLeave?.();

    if (blocker.state === blockerState.BLOCKED) {
      blocker.proceed();
    }
  };

  const handleStay = () => {
    onStay?.();

    if (blocker.state === blockerState.BLOCKED) {
      blocker.reset();
    }
  };

  useEffect(() => {
    if (!when) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [when]);

  return {
    isOpen,
    handleLeave,
    handleStay,
    blocker,
  };
};
