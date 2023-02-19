import styles from './AdminRoot.module.css';
import Sidebar from '../../components/admins/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/admins/navbar/Navbar';

const AdminRoot = () => {
  return (
    <div className="admin-wrapper">
      <div className={styles.admin}>
        <Sidebar />
        <div className={styles.homeContainer}>
          <Navbar />
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
