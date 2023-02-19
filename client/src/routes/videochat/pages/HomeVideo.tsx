import CreateButton from '../components/CreateButton';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchMeeting } from '../../../store/slice/meetingSlice';
import SecondHeader from '../../../components/secodHeader/SecondHeader';

function HomeVideo() {
  const dispatch = useDispatch<AppDispatch>();
  const { item } = useSelector((state: RootState) => state.meetings.meetings);

  useEffect(() => {
    dispatch(fetchMeeting());
  }, [dispatch]);
  const userId = localStorage.getItem('userId');

  const today = new Date();
  const dateToday =
    today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
  const timeToday = today.getHours() + ':' + today.getMinutes();

  return (
    <div>
      <SecondHeader />
      <h3>Selected meetings</h3>
      {item.map((meeting) =>
        meeting.users.map((user) => {
          return userId === user.id ? (
            <div key={meeting._id}>
              <div>{meeting.title}</div>
              <div>{meeting.description}</div>
              <div>
                <span>{meeting.date}</span> <span>{meeting.time}</span>
              </div>
              <CreateButton
                title={meeting.title}
                disabled={dateToday > meeting.date && timeToday > meeting.time}
              />
            </div>
          ) : (
            ''
          );
        })
      )}
    </div>
  );
}

export default HomeVideo;
