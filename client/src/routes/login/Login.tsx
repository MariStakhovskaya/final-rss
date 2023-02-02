import styles from './Login.module.css';
import google from '../../images/google.svg';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import Button from '../../components/custom/button/Button';

function Login() {
  return (
    <div className={styles.container}>
      <SecondHeader />
      <div className={styles.login__input}>
        <h3>Log in</h3>
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
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.login__button}>
          <Button name="Log in" callback={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default Login;
