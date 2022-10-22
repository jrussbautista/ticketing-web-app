import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useTypes } from 'services/typesService';

import TypeList from './components/TypesList';

const PAGE_LIMIT = 25;
const PAGE = 1;

const TicketsPage = () => {
  const [page, setPage] = useState(PAGE);
  const [pageLimit, setPageLimit] = useState(PAGE_LIMIT);

  const { data, isLoading, isFetching, isError } = useTypes({
    page,
    limit: pageLimit,
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
      <TypeList
        page={page}
        types={data.data}
        total={data.meta.total}
        rowsPerPage={pageLimit}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};

export default TicketsPage;
