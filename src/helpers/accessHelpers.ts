import { Role } from 'types/Auth';

export const checkIfHasAccess = (role: Role, allowedRoles: Role[] = []) => {
  return allowedRoles.includes(role);
};
