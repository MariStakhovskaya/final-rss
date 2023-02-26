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
      <h3 className={styles.selectMeeting}>Selected meetings</h3>
      <div className={styles.meetingsBlock}>
        {item.map((meeting) =>
          meeting.users.map((user) => {
            return userId === user.id ? (
              <div key={meeting._id}>
                <div className={styles.container}>
                  <div>
                    <div className={styles.title}>{meeting.title}</div>
                    <div>
                      <img
                        className={styles.img__meeting}
                        src={meeting.url}
                        alt={meeting.title}
                      />
                    </div>
                    <div className={styles.minititle}>Your role:</div>
                    <div className={styles.title__details}>{user.role}</div>
                    <div>
                      <div className={styles.minititle}>Date:</div>
                      <div className={styles.date}>
                        <span className={styles.title__details}>
                          {meeting.date}
                        </span>
                        <span className={styles.title__details}>
                          {meeting.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <CreateButton
                      title={meeting.title}
                      disabled={
                        new Date() <
                        new Date(meeting.date.split('.').reverse().join('-'))
                          ? true
                          : false
                      }
                      idRoom={meeting._id}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ''
            );
          })
        )}
      </div>
    </div>
  );
}

export default HomeVideo;
