import styles from './Login.module.css';
import google from '../../images/google.svg';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import Button from '../../components/custom/button/Button';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { fetchAuth, setIsAuth } from '../../store/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { Navigate } from 'react-router-dom';

function Login() {
  const isAuth = useSelector(setIsAuth);
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onChangeHandlerPass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const loginHandler = () => {
    console.log(email, password);
    dispatch(fetchAuth({ email, password }));
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
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
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={onChangeHandlerEmail}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={onChangeHandlerPass}
          />
        </div>
        <div className={styles.login__button}>
          <Button name="Log in" callback={loginHandler} />
        </div>
        <p>
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
