import styles from './Root.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Provider, useDispatch } from 'react-redux';
import { AppDispatch, store } from '../../store/store';
import { useEffect } from 'react';
import { fetchAuthMe } from '../../store/slice/authSlice';

export default function Root() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);
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
