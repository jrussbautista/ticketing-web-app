import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useTickets } from 'hooks/tickets';

import TicketList from './components/TicketList';

const PAGE_LIMIT = 25;
const PAGE = 1;

const TicketsPage = () => {
  const [page, setPage] = useState(PAGE);
  const [pageLimit, setPageLimit] = useState(PAGE_LIMIT);
  const { data, isLoading, isFetching, isError } = useTickets({ page, limit: pageLimit });

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    selectedPage: number
  ) => {
    setPage(selectedPage + 1);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const selectedPageLimit = Number(event.target.value);
    setPageLimit(selectedPageLimit);
  };

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
    <div>
      <TicketList
        page={page}
        tickets={data.data}
        total={data.meta.total}
        rowsPerPage={pageLimit}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default TicketsPage;
