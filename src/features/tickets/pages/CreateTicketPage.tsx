import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import routes from 'routes';

import CreateTicketForm from '../components/CreateTicketForm';
import { CreateTicketDTO } from '../types';
import { createTicket } from '../api';

const CreateTicketPage = () => {
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
      <CreateTicketForm onSubmit={handleCreateTicket} />
    </Paper>
  );
};

export default CreateTicketPage;
