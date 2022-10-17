import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { ValidationErrors } from 'types';

import * as authApi from 'api/authApi';
import { User, LoginDTO } from 'types/Auth';
import { setAuth, removeAuth, setUserLocalStorage } from 'helpers/authHelpers';

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
    await authApi.getCSRFCookie();
    const { user, access_token: token } = await authApi.login(data);
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

export const logout = createAsyncThunk(
  'auth/logout',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue }) => {
    try {
      await authApi.logout();
      removeAuth();
    } catch (err: any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMe = createAsyncThunk('auth/me', async (_, { rejectWithValue }) => {
  try {
    const user = await authApi.me();
    setUserLocalStorage(user);
    return { user };
  } catch (err: any) {
    removeAuth();
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
    // Login Case
    builder.addCase(login.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    });
    builder.addCase(login.rejected, (state) => {
      state.user = null;
      state.token = null;
    });
    // Logout Case
    builder.addCase(logout.fulfilled, (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
    });
    builder.addCase(logout.rejected, (state) => {
      state.user = null;
      state.token = null;
    });
    // Me Case
    builder.addCase(getMe.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.user = user;
    });
    builder.addCase(getMe.rejected, (state) => {
      state.user = null;
      state.token = null;
    });
  },
});

export default authSlice.reducer;
