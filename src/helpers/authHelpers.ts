import { localStorageKeys } from 'app/constants';
import { apiClient } from 'lib/axios';

import { User } from 'types/Auth';

export const getAccessTokenLocalStorage = (): string | null => {
  const accessToken = window.localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  return accessToken;
};

export const setUserLocalStorage = (user: User) => {
  window.localStorage.setItem(localStorageKeys.CURRENT_USER, JSON.stringify(user));
};

export const removeUserLocalStorage = () => {
  window.localStorage.removeItem(localStorageKeys.CURRENT_USER);
};

export const removeTokenLocalStorage = () => {
  window.localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
};

export const setTokenLocalStorage = (token: string) => {
  window.localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
};

export const setAuth = (user: User, token: string) => {
  setUserLocalStorage(user);
  setTokenLocalStorage(token);
  apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuth = () => {
  removeTokenLocalStorage();
  removeUserLocalStorage();
  apiClient.defaults.headers.common.Authorization = `Bearer `;
};
