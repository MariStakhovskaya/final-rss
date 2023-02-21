import styles from './Sidebar.module.css';
import GridViewIcon from '@mui/icons-material/GridView';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { logout } from '../../../store/slice/authSlice';
import logo from '../../../images/logo.svg';

const Sidebar = () => {
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
      </div>
      <hr className={styles.hrSidebarAdmin} />
      <div className={styles.center}>
        <ul className={styles.ulSidebarAdmin}>
          <Link to="/admin/">
            <li className={styles.liSidebarAdmin}>
              <GridViewIcon className={styles.icon} />
              <span className={styles.span}>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/allMeeting">
            <li className={styles.liSidebarAdmin}>
              <MeetingRoomIcon className={styles.icon} />
              <span className={styles.span}>Meetings</span>
            </li>
          </Link>
          <Link to="/admin/allUsers">
            <li className={styles.liSidebarAdmin}>
              <AccountBoxIcon className={styles.icon} />
              <span className={styles.span}>Users</span>
            </li>
          </Link>
          <Link to="/">
            <li className={styles.liSidebarAdmin} onClick={onClickLogout}>
              <ExitToAppIcon className={styles.icon} />
              <span className={styles.span}>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.bottom}>
        {/* <div className={styles.colorOption}></div>
        <div className={styles.colorOption}></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
