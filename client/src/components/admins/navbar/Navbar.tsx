import styles from './Navbar.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <input
              className={styles.inputNavbarAdmin}
              type="text"
              placeholder="Search..."
            />
            <SearchOutlinedIcon />
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <Brightness6OutlinedIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
              <AdminPanelSettingsIcon className={styles.avatar} />
              {/*  <img
                src="https://cropas.by/wp-content/uploads/2015/05/admin.jpg"
                alt="Admin avatar"
                className={styles.avatar}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hrNavbarAdmin} />
    </>
  );
};

export default Navbar;
