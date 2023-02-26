import styles from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../store/slice/authSlice';
import { Preloader } from '../../components/custom/preloader/Preloader';
import { useEffect } from 'react';
import { AppDispatch, RootState, useAppSelector } from '../../store/store';
import { getUserData } from '../../store/slice/userSlice';
import { Navigate } from 'react-router-dom';
import { fetchMeeting } from '../../store/slice/meetingSlice';
import Button from '../../components/custom/button/Button';

function Profile() {
  const dispatch = useDispatch<AppDispatch>();

  const { item } = useSelector((state: RootState) => state.meetings.meetings);
  const user = useSelector((state: RootState) => state.user.user);
  const isAuth = useAppSelector((state) => state.auth.status);
  const loader = useSelector(isLoading);

  const userId = localStorage.getItem('userId');
  // const userInfo = localStorage.getItem('user');

  useEffect(() => {
    if (userId) {
      dispatch(getUserData({ userId }));
    }
    dispatch(fetchMeeting());
  }, [dispatch, userId]);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {loader === 'loaded' ? (
        <div>
          <div className={styles.greeting}>Hello, {user.name}!</div>
          <div className={styles.container}>
            <div className={styles.meetings}>
              <h3 className={styles.title}>Your meetings</h3>
              <div>
                {item
                  .filter(
                    (el) =>
                      el.users.filter((elem) => elem.id === userId).length !== 0
                  )
                  .map((el) => (
                    <div key={el._id} className={styles.meeting}>
                      <p>{el.title}</p>
                      <div className={styles.date__button}>
                        <Button
                          name={el.date}
                          callback={() => {}}
                          disabled={
                            new Date() <
                            new Date(el.date.split('.').reverse().join('-'))
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.user}></div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default Profile;
