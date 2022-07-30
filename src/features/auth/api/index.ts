import apiClient from 'lib/apiClient';
import { LoginDTO, UserResponse } from '../types';

export const login = async (data: LoginDTO): Promise<UserResponse> => {
  const res = await apiClient.post('/login', data);
  return res.data;
};
