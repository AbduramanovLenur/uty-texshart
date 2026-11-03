import type { Role } from '../types';

export const hasRoleAccess = (
  targetRoles?: Role[],
  currentRoles?: Role | Role[],
): boolean => {
  if (!targetRoles || targetRoles.length === 0) return true;
  if (!currentRoles) return false;

  const userRoles = Array.isArray(currentRoles) ? currentRoles : [currentRoles];
  if (userRoles.length === 0) return false;

  return targetRoles.some((role) => userRoles.includes(role));
};
