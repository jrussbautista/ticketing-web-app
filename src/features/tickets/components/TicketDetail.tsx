import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { formatDate } from 'utils/date';

import StatusTag from './StatusTag';
import { Ticket } from '../types';

type TicketDetailProps = {
  ticket: Ticket;
};

const TicketDetail = ({ ticket }: TicketDetailProps) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Ticket #{ticket.id}
      </Typography>

      <Box sx={{ display: 'flex', mb: 2 }}>
        <Box sx={{ width: '25%', textAlign: 'left' }}>
          <Typography variant="h6">Requested By</Typography>
          <Typography>{ticket.owner.name}</Typography>
        </Box>
        <Box sx={{ width: '25%', textAlign: 'left' }}>
          <Typography variant="h6">Date Created</Typography>
          <Typography>{formatDate(ticket.created_at)}</Typography>
        </Box>
        <Box sx={{ width: '25%', textAlign: 'left' }}>
          <Typography variant="h6">Priority</Typography>
          <Typography>{ticket.priority.name}</Typography>
        </Box>
        <Box sx={{ width: '25%', textAlign: 'left' }}>
          <Typography variant="h6">Status</Typography>
          <StatusTag status={ticket.status} />
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6">Description</Typography>
        <Typography>{ticket.description}</Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Assignee:</Typography>
        <Typography>{ticket.assignee.name}</Typography>
      </Box>
    </Box>
  );
};

export default TicketDetail;
