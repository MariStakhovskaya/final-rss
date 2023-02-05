import styles from './Root.module.css';
import { Outlet, Navigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect } from 'react';
import { fetchAuthMe, setIsAuth } from '../../store/slice/authSlice';

export default function Root() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(setIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

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
