import styles from './Root.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

export default function Root() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <main className="container">
          <Outlet />
        </main>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
