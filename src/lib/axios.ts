import axios from 'axios';

import { API_URL, BASE_URL } from 'app/config';

const options = {
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const baseClient = axios.create({
  baseURL: BASE_URL,
  ...options,
});

export const apiClient = axios.create({
  baseURL: API_URL,
  ...options,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
