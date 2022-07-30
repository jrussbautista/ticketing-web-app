import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { DRAWER_WIDTH } from 'app/constants';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PrivateLayout = () => {
  const [mobileDrawerOpen, setDrawerMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerMobileOpen(!mobileDrawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar onToggleDrawer={handleDrawerToggle} />
      <Sidebar isOpen={mobileDrawerOpen} onClose={handleDrawerToggle} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default PrivateLayout;
