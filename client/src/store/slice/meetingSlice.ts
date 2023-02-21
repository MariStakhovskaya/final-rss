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
  meeting: {
    meetingItem: {} as MeetingType,
    status: 'loading',
  },
};

export const fetchMeeting = createAsyncThunk(
  'meeting/fetchMeeting',
  async () => {
    const { data } = await instance.get('meetings');
    return data;
  }
);

export const getOneMeeting = createAsyncThunk(
  'meeting/getOneMeeting',
  async (params: { id: string }) => {
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

export const createOneMeeting = createAsyncThunk(
  'meeting/createOneMeeting',
  async (params: { body: MeetingUpdateType }) => {
    await instance.post('meetings/', params.body);
  }
);

const meetingsSlice = createSlice({
  name: 'meeting',
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
    builder.addCase(getOneMeeting.pending, (state) => {
      state.meeting.status = 'loading';
      //state.meeting.meetingItem = {};
    });
    builder.addCase(getOneMeeting.fulfilled, (state, action) => {
      state.meeting.status = 'loaded';
      state.meeting.meetingItem = action.payload;
    });
    builder.addCase(getOneMeeting.rejected, (state) => {
      state.meeting.status = 'error';
    });
    builder.addCase(updateOneMeeting.pending, (state, action) => {
      // state.meeting.meetingItem = action.payload;
      state.meeting.status = 'loading';
    });
    builder.addCase(updateOneMeeting.fulfilled, (state, action) => {
      // state.meeting.meetingItem = action.payload;
      state.meeting.status = 'loaded';
    });
    builder.addCase(updateOneMeeting.rejected, (state, action) => {
      // state.meeting.meetingItem = action.payload;
      state.meeting.status = 'error';
    });
    builder.addCase(createOneMeeting.pending, (state, action) => {
      // state.meeting.meetingItem = action.payload;
      state.meeting.status = 'loading';
    });
    builder.addCase(createOneMeeting.fulfilled, (state, action) => {
      // state.meeting.meetingItem = action.payload;
      state.meeting.status = 'loaded';
    });
    builder.addCase(createOneMeeting.rejected, (state, action) => {
      // state.meeting.meetingItem = action.payload;
      state.meeting.status = 'error';
    });
  },
});

export const meetingsReducer = meetingsSlice.reducer;
