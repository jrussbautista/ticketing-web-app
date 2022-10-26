import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'app/hooks';
import routes from 'routes';

type PublicRouteProps = {
  children: JSX.Element;
};

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useAppSelector((state) => state.auth);

  if (user) {
    return <Navigate to={routes.index} replace />;
  }

  return children;
};

export default PublicRoute;
