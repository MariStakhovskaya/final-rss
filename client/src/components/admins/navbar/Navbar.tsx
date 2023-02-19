import styles from './Navbar.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <input className={styles.inputNavbarAdmin} type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <LanguageOutlinedIcon className={styles.icon} />
              English
            </div>
            <div className={styles.item}>
              <Brightness6OutlinedIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
              <NotificationsNoneOutlinedIcon className={styles.icon} />
              <div className={styles.counter}>1</div>
            </div>
            <div className={styles.item}>
              <img
                src="https://cropas.by/wp-content/uploads/2015/05/admin.jpg"
                alt="Photo admin"
                className={styles.avatar}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hrNavbarAdmin} />
    </>
  );
};

export default Navbar;
