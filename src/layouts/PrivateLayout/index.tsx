import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PrivateLayout = () => {
  const [mobileDrawerOpen, setDrawerMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerMobileOpen(!mobileDrawerOpen);
  };

  return (
    <div>
      <Navbar onToggleDrawer={handleDrawerToggle} />
      <Sidebar isOpen={mobileDrawerOpen} onClose={handleDrawerToggle} />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
