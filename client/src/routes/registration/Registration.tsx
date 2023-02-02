import Button from '../../components/custom/button/Button';
import styles from './Registration.module.css';
import google from '../../images/google.svg';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div className={styles.container}>
      <SecondHeader />
      <div className={styles.registration__input}>
        <h3>Create an Account</h3>
        <div className={styles.google__button}>
          <img src={google} alt="Google logo" />
          <div>
            <Button name="Sign up with Google" callback={() => {}} />
          </div>
        </div>
        <div className={styles.or}>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className={styles.inputs}>
          <input type="text" placeholder="First Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.create__button}>
          <Button name="Create Account" callback={() => {}} />
        </div>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
