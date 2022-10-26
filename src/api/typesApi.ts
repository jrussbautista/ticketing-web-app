import { apiClient } from 'lib/axios';
import { TypesResponse } from 'types/Ticket';

export const getTypes = async (params: Record<string, any> = {}): Promise<TypesResponse> => {
  const url = `/types`;
  const res = await apiClient.get(url, { params });
  return res.data;
};

export const deactivateType = async (id: number) => {
  const url = `/types/${id}/deactivate`;
  const res = await apiClient.post(url);
  return res.data;
};

export const activateType = async (id: number) => {
  const url = `/types/${id}/activate`;
  const res = await apiClient.post(url);
  return res.data;
};
