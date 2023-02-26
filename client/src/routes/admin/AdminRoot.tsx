import styles from './AdminRoot.module.css';
import Sidebar from '../../components/admins/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/admins/navbar/Navbar';
import { useState } from 'react';

const AdminRoot = () => {
  const [theme, setTheme] = useState('');
  function updateTheme(value: string) {
    setTheme(value);
  }
  return (
    <div className="admin-wrapper">
      <div className={styles.admin}>
        <Sidebar theme={theme} />
        <div className={styles.homeContainer}>
          <Navbar updateTheme={updateTheme} />
          <Outlet />
        </div>
      </div>
      <div className={styles.adminFooter}>
        <Footer />
      </div>
    </div>
  );
};
export default AdminRoot;
