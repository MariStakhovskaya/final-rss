import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../api/api';

export type UserType = {
  _id: string;
  email: string;
  name: string;
  __v: number;
};

export type StateType = {
  user: UserType;
  status: string;
};

const initialState = {
  user: {
    _id: '',
    email: '',
    name: '',
    __v: 0,
  },
};

export const getUserData = createAsyncThunk('user/getUserData', async () => {
  const { data } = await instance.get('users/user');
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const usersReducer = userSlice.reducer;
export const { setUserData } = userSlice.actions;
