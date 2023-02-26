import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Button from '../../components/custom/button/Button';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import { setIsAuth } from '../../store/slice/authSlice';
import styles from './Start.module.css';

function Start() {
  const isAuth = useSelector(setIsAuth);
  return (
    <>
      {isAuth ? (
        <Navigate to="/profile" />
      ) : (
        <div className={styles.container}>
          <div className={styles.slogan}>
            <h3>
              <span>The All-In-One Learning Platform</span> Trusted by
              Industries, Educational Institutions and Organizations around the
              world
            </h3>
            <div className={styles.line}></div>
          </div>
          <div className={styles.start__button}>
            <Link to="/registration">
              <Button name="Join Now" callback={() => {}} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Start;
