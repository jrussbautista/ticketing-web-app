import { QueryClient } from '@tanstack/react-query';

const DEFAULT_STALE_TIME = 60 * 1000 * 10;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      staleTime: DEFAULT_STALE_TIME, // 10 minutes,
    },
  },
});

export default queryClient;
