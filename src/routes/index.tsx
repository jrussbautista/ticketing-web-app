import DescriptionIcon from '@mui/icons-material/Description';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';

const routes = {
  login: '/login',
  dashboard: '/dashboard',
  teams: '/teams',
  tickets: '/tickets',
  createTicket: '/tickets/create',
  types: '/types',
};

export type Route = {
  path: string;
  name: string;
  icon: React.ReactElement;
  children?: Route[];
};

export const privateRoutes: Route[] = [
  {
    path: routes.dashboard,
    name: 'Dashboard',
    icon: <GridViewIcon />,
  },
  {
    path: routes.teams,
    name: 'Teams',
    icon: <GroupIcon />,
  },
  {
    path: '',
    name: 'Tickets',
    icon: <TaskIcon />,
    children: [
      {
        path: routes.tickets,
        name: 'All Tickets',
        icon: <TaskIcon />,
      },
      {
        path: routes.createTicket,
        name: 'Create Ticket',
        icon: <TaskIcon />,
      },
    ],
  },
  {
    path: routes.types,
    name: 'Types',
    icon: <DescriptionIcon />,
  },
];

export default routes;
