import { RootState } from './store';

export const allMeetings = (state: RootState) => state.meetings.meetings.item;
export const oneMeeting = (state: RootState) => state.meetings.meeting;
