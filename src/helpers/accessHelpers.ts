import { Role } from 'types/Auth';

export const checkIfHasAccess = (role: Role, allowedRoles: Role[] = []) => {
  if (!allowedRoles.length) {
    return true;
  }
  return allowedRoles.includes(role);
};
