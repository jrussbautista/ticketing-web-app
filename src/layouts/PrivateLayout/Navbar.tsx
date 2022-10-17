import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { DRAWER_WIDTH, APP_TITLE } from 'app/constants';

import UserMenu from './UserMenu';

type NavbarProps = {
  onToggleDrawer: () => void;
};

const Navbar = ({ onToggleDrawer }: NavbarProps) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToggleDrawer}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {APP_TITLE}
        </Typography>
        <Box sx={{ flex: 1, justifyContent: 'flex-end', display: 'flex' }}>
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
