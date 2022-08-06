import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { Route } from 'routes';
import colors from 'theme/colors';

type SidebarListItemProps = {
  route: Route;
};

const SidebarListItem = ({ route }: SidebarListItemProps) => {
  const { pathname } = useLocation();
  const isParentPathOpen = pathname.startsWith(route.path);
  const [open, setOpen] = useState(isParentPathOpen);

  const hasChildren = Boolean(route.children?.length);

  const handleListItemClick = () => {
    if (hasChildren) {
      setOpen(!open);
    }
  };

  const parentListItemProps = !hasChildren
    ? {
        component: Link,
        to: route.path,
      }
    : {};

  return (
    <>
      <ListItemButton
        onClick={handleListItemClick}
        selected={open}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...parentListItemProps}
      >
        <ListItemIcon>{route.icon}</ListItemIcon>
        <ListItemText primary={route.name} />
        {hasChildren && <Box>{open ? <ExpandLess /> : <ExpandMore />}</Box>}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {route?.children?.map((childRoute) => (
              <ListItemButton
                sx={{ pl: 9 }}
                key={childRoute.name}
                component={Link}
                to={childRoute.path}
              >
                <ListItemText
                  primary={childRoute.name}
                  sx={{
                    color: pathname === childRoute.path ? colors.main : 'inherit',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarListItem;
