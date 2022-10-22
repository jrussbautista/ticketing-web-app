import { apiClient } from 'lib/axios';
import { CreateTicketDTO, Ticket, TicketsResponse } from 'types/Ticket';

export const getTickets = async (params: Record<string, any>): Promise<TicketsResponse> => {
  const url = `/tickets`;
  const res = await apiClient.get(url, { params });
  return res.data;
};

export const getTicket = async (id: number): Promise<Ticket> => {
  const url = `/tickets/${id}`;
  const res = await apiClient.get(url);
  return res.data.data;
};

export const createTicket = async (data: CreateTicketDTO): Promise<Ticket> => {
  const url = '/tickets/';
  const res = await apiClient.post(url, data);
  return res.data.data;
};
