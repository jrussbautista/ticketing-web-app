import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAppSelector } from 'app/hooks';
import routes from 'routes';
import { Role } from 'types/Auth';
import { checkIfHasAccess } from 'helpers/accessHelpers';

type ProtectedRouteProps = {
  children: JSX.Element;
  allowedRoles?: Role[];
};

const ProtectedRoute = ({ children, allowedRoles = [] }: ProtectedRouteProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (!user) {
    return <Navigate to={routes.login} replace />;
  }

  const hasAccess = checkIfHasAccess(user.role, allowedRoles);
  if (!hasAccess) {
    return <Navigate state={{ from: location }} to={routes.unauthorize} replace />;
  }

  return children;
};

export default ProtectedRoute;
