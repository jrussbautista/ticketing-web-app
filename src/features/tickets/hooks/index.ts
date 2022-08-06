import { useQuery } from '@tanstack/react-query';
import { getTickets, Params } from '../api';

export const useTickets = (params?: Params) => {
  return useQuery(['tickets', params?.page, params?.limit], () => getTickets(params));
};
