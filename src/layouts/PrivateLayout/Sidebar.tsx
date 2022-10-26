import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import DescriptionIcon from '@mui/icons-material/Description';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import TaskIcon from '@mui/icons-material/Task';

import routes from 'routes';
import { Menu } from 'types';

import SidebarListItem from './SidebarListItem';

type SidebarProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const menus: Menu[] = [
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
    children: [
      {
        path: routes.types,
        name: 'All Types',
        icon: <DescriptionIcon />,
      },
      {
        path: routes.createTypes,
        name: 'Create Types',
        icon: <DescriptionIcon />,
      },
    ],
  },
];

const Sidebar = ({ onClose, isOpen }: SidebarProps) => {
  const drawerWidth = 240;

  const container = window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menus.map((menu) => (
          <SidebarListItem menu={menu} key={menu.name} />
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={isOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
