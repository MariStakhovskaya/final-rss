import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/api';

// для получения в компоненте.
// useEffect(() => {
//     //instance.get('meetings');
//     dispatch(fetchMeeting());
//   }, []);

export type MeetingType = {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  personCount: number;
  url: string;
  __v: number;
};

export type StateType = {
  item: Array<MeetingType>;
  status: string;
};

const initialState = {
  meetings: {
    item: [] as Array<MeetingType>,
    status: 'loading',
  },
};

export const fetchMeeting = createAsyncThunk('auth/fetchMeeting', async () => {
  const { data } = await instance.get('meetings');
  return data;
});

const meetingsSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMeeting.pending, (state) => {
      state.meetings.status = 'loading';
      state.meetings.item = [];
    });
    builder.addCase(fetchMeeting.fulfilled, (state, action) => {
      state.meetings.status = 'loaded';
      state.meetings.item = action.payload;
    });
    builder.addCase(fetchMeeting.rejected, (state) => {
      state.meetings.status = 'error';
      state.meetings.item = [];
    });
  },
});

export const meetingsReducer = meetingsSlice.reducer;
