import React from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import { useTicket } from 'hooks/tickets';
import TicketDetail from './components/TicketDetail';
import TicketActions from './components/TicketDetailActions';

type Param = {
  id: string;
};

const TicketDetailPage = () => {
  const { id } = useParams<Param>();
  const { data, isLoading, isFetching, isError } = useTicket(Number(id));

  if (!data || isError) {
    return null;
  }

  if (isLoading || isFetching) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 2 }}>
      <TicketDetail ticket={data} />
      <Divider />
      <TicketActions />
    </Paper>
  );
};

export default TicketDetailPage;
