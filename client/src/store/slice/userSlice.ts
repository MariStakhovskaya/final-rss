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

export type UserUpdateType = {
  _id?: string;
  name: string;
  email: string;
};

const initialState = {
  user: {
    _id: '',
    email: '',
    name: '',
    __v: 0,
  },
  users: [] as Array<UserType>,
};

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (params: { userId: string }) => {
    const { data } = await instance.get(`users/user/${params.userId}`);
    return data;
  }
);

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (params: { userId: string }) => {
    const { data } = await instance.delete(`users/user/${params.userId}`);
    return data;
  }
);
//Чтобы получить всех юзеров, надо сделать в компоненте запрос
// useEffect(() => {
//dispatch(getAllUsers());
// }, [dispatch]);
export const getAllUsers = createAsyncThunk('user/getAllUsers', async () => {
  const { data } = await instance.get('users/');
  return data;
});

//update user - email обязательно шлем
export const updateOneUser = createAsyncThunk(
  'user/updateOneUser',
  async (params: { id: string; body: UserUpdateType }) => {
    await instance.patch(`users/user/${params.id}`, params.body);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.users = [];
      state.user = {
        _id: '',
        email: '',
        name: '',
        __v: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state, action) => {
      state.user = {
        _id: '',
        email: '',
        name: '',
        __v: 0,
      };
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.user = {
        _id: '',
        email: '',
        name: '',
        __v: 0,
      };
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(updateOneUser.fulfilled, (state, action) => {
      //state.meeting = action.payload;
    });
  },
});

export const usersReducer = userSlice.reducer;
export const { logoutUser } = userSlice.actions;
