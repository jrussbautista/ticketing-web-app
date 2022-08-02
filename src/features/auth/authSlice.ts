import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ValidationErrors } from 'types';

import * as api from './api';

import { User, LoginDTO } from './types';
import { setAuth } from './utils';

type InitialState = {
  user: User | null;
  token: string | null;
};

const localStorageCurrentUser = localStorage.getItem('currentUser');
const localStorageToken = localStorage.getItem('token');

const initialState: InitialState = {
  user: localStorageCurrentUser ? JSON.parse(localStorageCurrentUser as string) : null,
  token: localStorageToken || null,
};

export const login = createAsyncThunk<
  { user: User; token: string },
  LoginDTO,
  { rejectValue: ValidationErrors }
>('auth/login', async (data, { rejectWithValue }) => {
  try {
    const { user, access_token: token } = await api.login(data);
    setAuth(user, token);
    return { user, token };
  } catch (err: any) {
    const error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    });
    builder.addCase(login.rejected, (state) => {
      state.user = null;
      state.token = null;
    });
  },
});

export default authSlice.reducer;
