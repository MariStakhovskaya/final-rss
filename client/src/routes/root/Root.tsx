import styles from './Root.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useEffect, useState } from 'react';
import { fetchAuthMe } from '../../store/slice/authSlice';
import SecondHeader from '../../components/secodHeader/SecondHeader';

export default function Root() {
  const [theme, setTheme] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);
  function updateTheme(value: string) {
    setTheme(value);
  }
  return (
    <div className={styles.container}>
      <Header theme={theme} />
      <div className={styles.content}>
        <div className={styles.headerContainer}>
          <SecondHeader updateTheme={updateTheme} />
        </div>
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
