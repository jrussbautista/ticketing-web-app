import { useQuery } from '@tanstack/react-query';

import { getTickets, getTicket } from 'api/ticketsApi';
import { queryKeys } from 'app/constants';

export const useTickets = (params: Record<string, any>) => {
  return useQuery([queryKeys.TICKETS, params], () => getTickets(params));
};

export const useTicket = (id: number) => {
  return useQuery([queryKeys.TICKET, id], () => getTicket(id));
};
