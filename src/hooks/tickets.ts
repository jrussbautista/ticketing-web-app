import { useQuery } from '@tanstack/react-query';

import { getTickets, getTicket, Params } from 'api/ticketApi';

export const useTickets = (params?: Params) => {
  return useQuery(['tickets', params?.page, params?.limit], () => getTickets(params));
};

export const useTicket = (id: number) => {
  return useQuery(['ticket', id], () => getTicket(id));
};
