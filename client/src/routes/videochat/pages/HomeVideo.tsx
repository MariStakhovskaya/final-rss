import CreateButton from '../components/CreateButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchMeeting } from '../../../store/slice/meetingSlice';
import SecondHeader from '../../../components/secodHeader/SecondHeader';
import styles from './HomeVideo.module.css';

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
  // const timeToday = today.getHours() + ':' + today.getMinutes();

  return (
    <div>
      <SecondHeader />
      <h3>Selected meetings</h3>
      {item.map((meeting) =>
        meeting.users.map((user) => {
          return userId === user.id ? (
            <div key={meeting._id}>
              <div className={styles.container}>
                <div className={styles.title}>{meeting.title}</div>
                <div>
                  <img
                    className={styles.img__meeting}
                    src={meeting.url}
                    alt={meeting.title}
                  />
                </div>
                <div className={styles.role}>Your role:</div>
                <div>{user.role}</div>
                <div>
                  <div className={styles.date}>Date:</div>
                  <span>{meeting.date}</span> <span>{meeting.time}</span>
                </div>
                <CreateButton
                  title={meeting.title}
                  disabled={dateToday <= meeting.date}
                  idRoom={meeting._id}
                />
              </div>
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
