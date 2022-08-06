import { useQuery } from '@tanstack/react-query';
import { getTickets } from '../api';

export const useTickets = () => {
  return useQuery(['tickets'], getTickets);
};
