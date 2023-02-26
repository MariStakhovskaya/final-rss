import { Link } from 'react-router-dom';
import styles from './SecondHeader.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { logout, setIsAuth } from '../../store/slice/authSlice';
import { logoutUser } from '../../store/slice/userSlice';

function SecondHeader() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(setIsAuth);

  const user = useSelector((state: RootState) => state.user.user);

  const onClickLogout = () => {
    dispatch(logout());
    dispatch(logoutUser());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
  };
  return (
    <div className={styles.container}>
      {isAuth ? (
        <p className={styles.greeting}>Hello, {user.name}!</p>
      ) : (
        <p></p>
      )}
      <div className={styles.user__language}>
        <div className={styles.user}>
          <div className={styles.status}>
            {!isAuth ? (
              <Link to="/login">Log in</Link>
            ) : (
              <Link to="/">
                <span onClick={onClickLogout}>Log out</span>
              </Link>
            )}
          </div>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 12C15.6887 12 17.8818 14.1223 17.9954 16.7831L18 17V18C18 19.0544 17.1841 19.9182 16.1493 19.9945L16 20H2C0.945638 20 0.0818349 19.1841 0.00548577 18.1493L0 18V17C0 14.3113 2.12231 12.1182 4.78311 12.0046L5 12H13ZM13 14H5C3.40232 14 2.09634 15.2489 2.00509 16.8237L2 17V18H16V17C16 15.4023 14.7511 14.0963 13.1763 14.0051L13 14ZM9 0C11.7614 0 14 2.23858 14 5C14 7.76142 11.7614 10 9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0ZM9 2C7.3431 2 6 3.34315 6 5C6 6.65685 7.3431 8 9 8C10.6569 8 12 6.65685 12 5C12 3.34315 10.6569 2 9 2Z"
              fill="#A0A0A0"
            />
          </svg>
        </div>
        <p className={styles.language}>EN</p>
      </div>
    </div>
  );
}

export default SecondHeader;
