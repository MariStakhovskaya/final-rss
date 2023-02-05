import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/api';
import { RootState } from '../store';

const initialState = {
  data: null,
  status: 'loading',
};

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (params: { email: string; password: string }) => {
    const { data } = await instance.post('api/auth/login', params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await instance.get('api/auth/me');
  return data;
});

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params: { name: string; email: string; password: string }) => {
    const { data } = await instance.post('api/auth/register', params);
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
      if (state.data) {
        localStorage.setItem('token', action.payload.token);
      }
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
      if (state.data) {
        localStorage.setItem('token', action.payload.token);
      }
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export const setIsAuth = (state: RootState) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
