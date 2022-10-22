import { apiClient } from 'lib/axios';
import { TypesResponse } from 'types/Ticket';

export const getTypes = async (params: Record<string, any> = {}): Promise<TypesResponse> => {
  const url = `/types`;
  const res = await apiClient.get(url, { params });
  return res.data;
};
