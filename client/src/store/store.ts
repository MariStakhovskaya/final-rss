import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slice/userSlice';
import { meetingsReducer } from './slice/meetingSlice';
import { authReducer } from './slice/authSlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    auth: authReducer,
    meetings: meetingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
