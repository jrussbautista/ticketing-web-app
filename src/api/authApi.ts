import { apiClient, baseClient } from 'lib/axios';
import { LoginDTO, User, UserResponse } from 'types/Auth';

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

export const me = async (): Promise<User> => {
  const res = await apiClient.get('/me');
  return res.data.data;
};
