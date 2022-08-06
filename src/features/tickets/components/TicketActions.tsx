import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const TicketActions = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button size="large" variant="contained" disableElevation sx={{ mr: 2 }}>
        Resolve
      </Button>
      <Button size="large" variant="contained" color="error" disableElevation sx={{ mr: 2 }}>
        Reject
      </Button>
      <Button size="large" variant="contained" color="warning" disableElevation>
        Close
      </Button>
    </Box>
  );
};

export default TicketActions;
