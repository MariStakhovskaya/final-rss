import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../api/api';

// для получения в компоненте.
// useEffect(() => {
//     //instance.get('meetings');
//     dispatch(fetchMeeting());
//   }, []);
export type RoleType = {
  [key: string]: string;
};

export type UserMeetingType = {
  id: string;
  role: string;
};

export type MeetingType = {
  _id: string;
  title: string;
  description: string;
  fulldescriptions: string;
  date: string;
  time: string;
  personCount: number;
  url: string;
  role: RoleType[];
  users: Array<UserMeetingType>;
  __v: number;
};

export type StateType = {
  item: Array<MeetingType>;
  status: string;
};

export type MeetingUpdateType = {
  _id?: string;
  title?: string;
  description?: string;
  fulldescriptions?: string;
  date?: string;
  time?: string;
  personCount?: number;
  url?: string;
  role?: RoleType[];
  users?: Array<UserMeetingType>;
  __v?: number;
};

const initialState = {
  meetings: {
    item: [] as Array<MeetingType>,
    status: 'loading',
  },
  meeting: {} as MeetingType,
};

export const fetchMeeting = createAsyncThunk('auth/fetchMeeting', async () => {
  const { data } = await instance.get('meetings');
  return data;
});

export const getOneMeeting = createAsyncThunk(
  'meeting/getOneMeeting',
  async (params: { id: string }) => {
    console.log(params);
    const { data } = await instance.get(`meetings/${params.id}`);
    return data;
  }
);

export const updateOneMeeting = createAsyncThunk(
  'meeting/updateOneMeeting',
  async (params: { id: string; body: MeetingUpdateType }) => {
    await instance.patch(`meetings/${params.id}`, params.body);
  }
);

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
    builder.addCase(getOneMeeting.fulfilled, (state, action) => {
      state.meeting = action.payload;
    });
    builder.addCase(updateOneMeeting.fulfilled, (state, action) => {
      //state.meeting = action.payload;
    });
  },
});

export const meetingsReducer = meetingsSlice.reducer;
