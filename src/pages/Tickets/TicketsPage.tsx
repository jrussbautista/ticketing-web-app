import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useTickets } from 'services/ticketsService';

import TicketList from './components/TicketList';

const PAGE_LIMIT = 25;
const PAGE = 1;

const TicketsPage = () => {
  const [page, setPage] = useState(PAGE);
  const [pageLimit, setPageLimit] = useState(PAGE_LIMIT);
  const [filters, setFilters] = useState({
    created_by_me: false,
  });

  const { data, isLoading, isFetching, isError } = useTickets({
    page,
    limit: pageLimit,
    ...filters,
  });

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

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const { checked } = event.target;
    setFilters({ ...filters, [name]: checked });
    setPage(PAGE);
    setPageLimit(PAGE_LIMIT);
  };

  if (!data || isError) {
    // TODO: display error component
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
    <Box>
      {/* Filters */}
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
        {
          /* Only my tickets filter */
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={filters.created_by_me}
                  onChange={(event) => handleFilterChange(event, 'created_by_me')}
                />
              }
              label="Only My Tickets"
            />
          </FormGroup>
        }
      </Box>
      <TicketList
        page={page}
        tickets={data.data}
        total={data.meta.total}
        rowsPerPage={pageLimit}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default TicketsPage;
