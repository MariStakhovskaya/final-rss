import Button from '../../components/custom/button/Button';
import { ChangeEvent, useState } from 'react';
import styles from './Registration.module.css';
import google from '../../images/google.svg';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchRegister } from '../../store/slice/authSlice';
import { setIsAuth } from '../../store/slice/authSlice';
import { Navigate } from 'react-router-dom';

function Registration() {
  const isAuth = useSelector(setIsAuth);
  console.log(isAuth);
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandlerName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const onChangeHandlerEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onChangeHandlerPass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const onClickHandler = () => {
    dispatch(fetchRegister({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

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
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={onChangeHandlerName}
          />
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
        <div className={styles.create__button}>
          <Button name="Create Account" callback={onClickHandler} />
        </div>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
