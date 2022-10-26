import React from 'react';
import { useAppSelector } from 'app/hooks';
import { Role } from 'types/Auth';
import { checkIfHasAccess } from 'helpers/accessHelpers';

type CheckAccessProps = {
  allowedRoles: Role[];
  children: React.ReactNode;
};

const CheckAccess = ({ allowedRoles = [], children }: CheckAccessProps) => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user) {
    return null;
  }

  const hasAccess = checkIfHasAccess(user.role, allowedRoles);
  if (!hasAccess) {
    return null;
  }

  return children as React.ReactElement<any>;
};

export default CheckAccess;
