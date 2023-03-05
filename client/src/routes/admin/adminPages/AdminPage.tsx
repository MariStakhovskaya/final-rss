import styles from './AdminPage.module.css';
import Chart from '../../../components/admins/chart/Chart';
import Featured from '../../../components/admins/featured/Featured';
import Widget from '../../../components/admins/widgets/Widget';
import List from '../../../components/admins/table/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchMeeting } from '../../../store/slice/meetingSlice';
import { Preloader } from '../../../components/custom/preloader/Preloader';
import { getAllUsers } from '../../../store/slice/userSlice';

const Admin = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMeeting());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const { item } = useSelector((state: RootState) => state.meetings.meetings);
  const users = useSelector((state: RootState) => state.user.users);
  const isLoadingMeetings = useSelector(
    (state: RootState) => state.meetings.meetings.status
  );
  const isLoadingUsers = useSelector((state: RootState) => state.user.status);
  return (
    <>
      {isLoadingMeetings === 'loading' || isLoadingUsers === 'loading' ? (
        <Preloader />
      ) : (
        <>
          <div className={styles.widgets}>
            <Widget type="user" count={users.length} />
            <Widget type="meeting" count={item.length} />
          </div>
          <div className={styles.charts}>
            <Featured allMeetings={item} />
            <Chart
              aspect={2 / 1}
              title={'Number Of New Users'}
              allUsers={users}
            />
          </div>
          <div className={styles.listContainer}>
            <div className={styles.listTitle}>Latest Users</div>
            <List allUsers={users} />
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
