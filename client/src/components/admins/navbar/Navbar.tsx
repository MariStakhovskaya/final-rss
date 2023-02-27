import styles from './Navbar.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useTheme } from '../../../theme/useTheme';

type NavbarType = {
  updateTheme: (value: string) => void;
};

const Navbar = ({ updateTheme }: NavbarType) => {
  const { themeColor, setThemeColor } = useTheme();
  function handleChangeTheme() {
    if (themeColor === 'dark') {
      setThemeColor('light');
      updateTheme('light');
    } else {
      setThemeColor('dark');
      updateTheme('dark');
    }
  }
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.items}>
            <div className={styles.item}>
              <Brightness6OutlinedIcon
                className={styles.icon}
                onClick={handleChangeTheme}
              />
            </div>
            <div className={styles.item}>
              <AdminPanelSettingsIcon className={styles.avatar} />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.hrNavbarAdmin} />
    </>
  );
};

export default Navbar;
