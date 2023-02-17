import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/api';
import { RootState } from '../store';

export type UserType = {
  _id?: string;
  email?: string;
  name?: string;
  __v?: number;
};

const initialState = {
  data: null,
  dataUser: {} as UserType,
  status: 'loading',
  error: '',
};

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (params: { email: string; password: string }, { dispatch }) => {
    const { data } = await instance.post('api/auth/login', params);
    // dispatch(setUserData(data.userData));
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await instance.get('api/auth/me');
  // const token = localStorage.getItem('token');
  // console.log(token);
  //dispatch(setUserData(data.userData));
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
      delete state.dataUser._id;
      delete state.dataUser.name;
      delete state.dataUser.__v;
      delete state.dataUser.email;
    },
    setErrorREdux: (state, action) => {
      state.error = action.payload;
    },
    setUserData: (state, action) => {
      state.dataUser = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.status = 'loading';
      state.error = '';
      state.data = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.error = '';
      state.data = action.payload;
      if (state.data) {
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.userData));
        localStorage.setItem('userId', action.payload.userData._id);
      }
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.status = 'error';
      state.error = 'Пользователь с таким e-mail уже зарегестрирован';
      state.data = null;
    });
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = 'loading';
      state.data = null;
      state.error = '';
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.error = '';
      state.data = action.payload;
      if (state.data) {
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.userData));
        localStorage.setItem('userId', action.payload.userData._id);
      }
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.status = 'error';
      state.error = 'Неверный email или пароль';
      state.data = null;
    });
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.status = 'loaded';
      state.data = null;
      state.error = '';
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
      if (state.data) {
        localStorage.setItem('userId', action.payload._id);
      }
      state.error = '';
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.status = 'error';
      state.data = null;
      state.error = '';
    });
  },
});

export const setIsAuth = (state: RootState) => Boolean(state.auth.data);
export const error = (state: RootState) => state.auth.error;
export const isLoading = (state: RootState) => state.auth.status;
export const setUser = (state: RootState) => state.auth.data;

export const authReducer = authSlice.reducer;

export const { logout, setErrorREdux, setUserData } = authSlice.actions;
