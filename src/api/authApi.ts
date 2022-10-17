import { apiClient, baseClient } from 'lib/axios';
import { LoginDTO, UserResponse } from 'types/Auth';

export const getCSRFCookie = (): Promise<void> => {
  return baseClient.get('/sanctum/csrf-cookie');
};

export const login = async (data: LoginDTO): Promise<UserResponse> => {
  const res = await apiClient.post('/login', data);
  return res.data;
};

export const logout = async (): Promise<void> => {
  const res = await apiClient.post('/logout');
  return res.data;
};
