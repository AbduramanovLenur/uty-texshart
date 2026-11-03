import { useEffect } from 'react';
import { useBlocker, type BlockerFunction } from 'react-router-dom';
import type { UseLeaveConfirmOptions } from './types';

export const useLeaveConfirm = (options: UseLeaveConfirmOptions = {}) => {
  const { when = true, onLeave, onStay } = options;

  const shouldBlock: BlockerFunction = (args) => {
    const nextState = args.nextLocation.state as Record<string, unknown> | null;
    if (nextState?.skipLeaveConfirm) {
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

  const isOpen = blocker.state === 'blocked';

  const handleLeave = () => {
    onLeave?.();
    if (blocker.state === 'blocked') {
      blocker.proceed();
    }
  };

  const handleStay = () => {
    onStay?.();
    if (blocker.state === 'blocked') {
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
