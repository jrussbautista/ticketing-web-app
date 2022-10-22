import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Type } from 'types/Ticket';

type TypeListProps = {
  types: Type[];
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

const TypeList = ({
  types,
  rowsPerPage,
  total,
  page,
  onPageChange,
  onRowsPerPageChange,
}: TypeListProps) => {
  return (
    <>
      <TableContainer component={Paper} sx={{ width: '100%', overflow: 'hidden' }}>
        <Table aria-label="ticket list table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {types.map((type) => (
              <TableRow key={type.id}>
                <TableCell component="th" scope="row">
                  {type.id}
                </TableCell>
                <TableCell>{type.name}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" disableElevation>
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

export default TypeList;
