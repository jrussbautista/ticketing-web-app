import { useRoutes, Navigate } from 'react-router-dom';

// Pages
import LoginPage from 'pages/Login/LoginPage';
import TicketsPage from 'pages/Tickets/TicketsPage';
import TicketDetailPage from 'pages/Tickets/TicketDetailPage';
import TicketCreatePage from 'pages/Tickets/TicketCreatePage';
import TypesPage from 'pages/Types/TypesPage';
import TypesCreatePage from 'pages/Types/TypesCreatePage';
import UnauthorizePage from 'pages/Unauthorize/UnauthorizePage';
import NotFoundPage from 'pages/NotFound/NotFoundPage';

import { useAppSelector } from 'app/hooks';
import { roles } from 'app/constants';
import routes from 'routes';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import { Role } from 'types/Auth';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

type Route = {
  path: string;
  element: JSX.Element;
};

type PrivateRoute = {
  allowedRoles?: Role[];
} & Route;

const publicRoutes: Route[] = [
  {
    path: routes.login,
    element: <LoginPage />,
  },
];

const privateRoutes: PrivateRoute[] = [
  // Tickets Route
  {
    path: routes.tickets,
    element: <TicketsPage />,
  },
  {
    path: routes.createTicket,
    element: <TicketCreatePage />,
  },
  {
    path: routes.ticketDetail,
    element: <TicketDetailPage />,
  },
  // Types Route
  {
    path: routes.types,
    element: <TypesPage />,
  },
  {
    path: routes.createTypes,
    element: <TypesCreatePage />,
    allowedRoles: [roles.ADMIN],
  },
];

const Routing = () => {
  const { user } = useAppSelector((state) => state.auth);

  const publicRoutesChildren = publicRoutes.map((route) => {
    return {
      ...route,
      element: <PublicRoute>{route.element}</PublicRoute>,
    };
  });

  const privateRoutesChildren = privateRoutes.map((route) => {
    return {
      ...route,
      element: <ProtectedRoute allowedRoles={route?.allowedRoles}>{route.element}</ProtectedRoute>,
    };
  });

  // determine which page to show for index route
  // if authenticated show tickets page
  // otherwise show login page
  const navigateIndexRouteTo = user ? routes.tickets : routes.login;

  const elements = useRoutes([
    {
      path: routes.index,
      element: <Navigate to={navigateIndexRouteTo} />,
    },
    {
      element: <PublicLayout />,
      children: publicRoutesChildren,
    },
    {
      element: <PrivateLayout />,
      children: privateRoutesChildren,
    },
    {
      path: routes.unauthorize,
      element: <UnauthorizePage />,
    },
    {
      path: routes.notFound,
      element: <NotFoundPage />,
    },
  ]);

  return elements;
};

export default Routing;
