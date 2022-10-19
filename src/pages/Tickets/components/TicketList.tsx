import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { formatDate } from 'utils/date';
import { upperCaseFirstLetter } from 'utils/text';
import routes from 'routes';

import { Ticket } from 'types/Ticket';
import TicketStatusTag from './TicketStatusTag';

type TicketListProps = {
  tickets: Ticket[];
  total: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ROWS_PER_PAGE_OPTIONS = [5, 10, 25];

const TicketList = ({
  tickets,
  rowsPerPage,
  total,
  page,
  onPageChange,
  onRowsPerPageChange,
}: TicketListProps) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ width: '100%', overflow: 'hidden' }}>
        <Table aria-label="ticket list table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Requester</TableCell>
              <TableCell>Date Created</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell component="th" scope="row">
                  #{ticket.id}
                </TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.owner.name}</TableCell>
                <TableCell>{formatDate(ticket.created_at)}</TableCell>
                <TableCell>{upperCaseFirstLetter(ticket.priority)}</TableCell>
                <TableCell>
                  <TicketStatusTag status={ticket.status} />
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    disableElevation
                    component={RouterLink}
                    to={`${routes.tickets}/${ticket.id}`}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </>
  );
};

export default TicketList;
