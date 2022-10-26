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

import { Menu } from 'types';
import colors from 'theme/colors';

type SidebarListItemProps = {
  menu: Menu;
};

const SidebarListItem = ({ menu }: SidebarListItemProps) => {
  const { pathname } = useLocation();
  const isParentPathOpen = pathname.startsWith(menu.path);
  const [open, setOpen] = useState(isParentPathOpen);

  const hasChildren = Boolean(menu.children?.length);

  const handleListItemClick = () => {
    if (hasChildren) {
      setOpen(!open);
    }
  };

  const parentListItemProps = !hasChildren
    ? {
        component: Link,
        to: menu.path,
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
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.name} />
        {hasChildren && <Box>{open ? <ExpandLess /> : <ExpandMore />}</Box>}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {menu?.children?.map((childMenu) => (
              <ListItemButton
                sx={{ pl: 9 }}
                key={childMenu.name}
                component={Link}
                to={childMenu.path}
              >
                <ListItemText
                  primary={childMenu.name}
                  sx={{
                    color: pathname === childMenu.path ? colors.main : 'inherit',
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
