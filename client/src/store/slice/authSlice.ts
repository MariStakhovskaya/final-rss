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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = 'loading';
      state.data = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });
  },
});

export const setIsAuth = (state: RootState) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
