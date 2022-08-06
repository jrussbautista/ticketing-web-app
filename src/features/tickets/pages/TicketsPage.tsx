import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import TicketList from '../components/TicketList';
import { useTickets } from '../hooks';

const PAGE_LIMIT = 25;

const TicketsPage = () => {
  const { data, isLoading, isError } = useTickets();

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    // TODO: handle pagination on page change
    console.log('event', event);
    console.log('page', page);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    // TODO: handle pagination on rows per page change
    console.log('event', event);
  };

  if (!data || isError) {
    return null;
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <TicketList
        page={1}
        tickets={data.data}
        total={data.meta.total}
        rowsPerPage={PAGE_LIMIT}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default TicketsPage;
