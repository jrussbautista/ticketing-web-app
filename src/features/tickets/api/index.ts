import apiClient from 'lib/apiClient';
import { Ticket, TicketsResponse } from '../types';

export type Params = {
  page: number;
  limit: number;
};

const INITIAL_PAGE = 1;
const INITIAL_LIMIT = 20;

export const getTickets = async (
  { page, limit }: Params = { page: INITIAL_PAGE, limit: INITIAL_LIMIT }
): Promise<TicketsResponse> => {
  const url = `/tickets?page=${page}&limit=${limit}`;
  const res = await apiClient.get(url);
  return res.data;
};

export const getTicket = async (id: number): Promise<Ticket> => {
  const url = `/tickets/${id}`;
  const res = await apiClient.get(url);
  return res.data.data;
};
