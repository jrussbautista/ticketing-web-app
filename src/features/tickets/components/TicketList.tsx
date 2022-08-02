import React from 'react';
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

import { Ticket } from '../types';
import StatusTag from './StatusTag';

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
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Requester</TableCell>
              <TableCell align="right">Date Created</TableCell>
              <TableCell align="right">Priority</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell component="th" scope="row">
                  #{ticket.id}
                </TableCell>
                <TableCell align="right">{ticket.title}</TableCell>
                <TableCell align="right">{ticket.owner.name}</TableCell>
                <TableCell align="right">{formatDate(ticket.created_at)}</TableCell>

                <TableCell align="right">{upperCaseFirstLetter(ticket.priority.name)}</TableCell>
                <TableCell align="right">
                  <StatusTag status={ticket.status} />
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
