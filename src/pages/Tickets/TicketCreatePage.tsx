import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import routes from 'routes';
import { CreateTicketDTO } from 'types/Ticket';
import { createTicket } from 'api/ticketApi';

import TicketForm from './components/TicketForm';

const TicketCreatePage = () => {
  const navigate = useNavigate();

  const handleCreateTicket = async (values: CreateTicketDTO) => {
    try {
      await createTicket(values);
      navigate(routes.tickets);
    } catch (error) {
      // TODO: show error message
      console.log('error', error);
    }
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5">Create Ticket</Typography>
      <TicketForm onSubmit={handleCreateTicket} />
    </Paper>
  );
};

export default TicketCreatePage;
