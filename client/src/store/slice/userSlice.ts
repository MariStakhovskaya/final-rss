import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type UserType = {
  _id: string;
  email: string;
  password: string;
  name: string;
  __v: number;
};

export type StateType = {
  users: Array<UserType>;
  status: string;
};

const initialState: StateType = {
  users: [],
  status: 'loading',
};

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params) => {
    const { data } = await axios.post<ResponseType>(
      'api/auth/register',
      params
    );
    return data;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchRegister.fulfilled, (state) => {
      state.status = 'loaded';
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const usersReducer = userSlice.reducer;
