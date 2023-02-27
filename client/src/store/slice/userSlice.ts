import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../../api/api';

export type UserType = {
  updatedAt?: string;
  password?: string;
  _id: string;
  email: string;
  name: string;
  __v?: number;
  createdAt: string;
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
  status: 'loading',
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

export const createUser = createAsyncThunk(
  'user/createUser',
  async (params: { email: string; password: string; name: string }) => {
    const { data } = await instance.post('users/admin', params);
    return data;
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
      state.status = 'loading';
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(getUserData.rejected, (state) => {
      state.user = {
        _id: '',
        email: '',
        name: '',
        __v: 0,
      };
      state.status = 'error';
    });
    builder.addCase(createUser.pending, (state, action) => {
      //state.user = action.payload;
      state.status = 'loading';
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      //state.user = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(createUser.rejected, (state, action) => {
      //state.user = action.payload;
      state.status = 'error';
    });
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.users = [];
      state.status = 'loading';
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = 'loaded';
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.status = 'error';
      state.users = [];
    });
    builder.addCase(updateOneUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateOneUser.fulfilled, (state) => {
      state.status = 'loaded';
    });
    builder.addCase(updateOneUser.rejected, (state) => {
      state.status = 'error';
    });
  },
});

export const usersReducer = userSlice.reducer;
export const { logoutUser } = userSlice.actions;
