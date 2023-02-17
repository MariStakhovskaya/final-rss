import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slice/userSlice';
import { meetingsReducer } from './slice/meetingSlice';
import { authReducer } from './slice/authSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    auth: authReducer,
    meetings: meetingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
