import apiClient from 'lib/apiClient';
import { TicketsResponse } from '../types';

export const getTickets = async (): Promise<TicketsResponse> => {
  const res = await apiClient.get('/tickets');
  return res.data;
};
