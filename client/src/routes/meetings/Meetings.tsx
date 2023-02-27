import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { fetchMeeting } from '../../store/slice/meetingSlice';
import Meeting from './Meeting';
import styles from './Meetings.module.css';

function Meetings() {
  const dispatch = useDispatch<AppDispatch>();
  const { item } = useSelector((state: RootState) => state.meetings.meetings);

  useEffect(() => {
    dispatch(fetchMeeting());
  }, [dispatch]);

  return (
    <div>
      <h3 className={styles.selectTopic}>Select a Topic</h3>
      <div className={styles.meetingsBlock}>
        {item.map((el) => (
          <Meeting key={el._id} meeting={el} />
        ))}
      </div>
    </div>
  );
}

export default Meetings;
