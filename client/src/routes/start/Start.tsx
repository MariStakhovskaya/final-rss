import { Link } from 'react-router-dom';
import Button from '../../components/custom/button/Button';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import styles from './Start.module.css';

function Start() {
  return (
    <div className={styles.container}>
      <SecondHeader />
      <div className={styles.slogan}>
        <h3>
          <span>The All-In-One Learning Platform</span> Trusted by Industries,
          Educational Institutions and Organizations around the world
        </h3>
        <div className={styles.line}></div>
      </div>
      <div className={styles.start__button}>
        <Link to="/registration">
          <Button name="Join Now" callback={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default Start;
