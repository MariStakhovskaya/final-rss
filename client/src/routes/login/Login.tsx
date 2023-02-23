import styles from './Login.module.css';
//import google from '../../images/google.svg';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import Button from '../../components/custom/button/Button';
import { Link } from 'react-router-dom';
import {
  fetchAuth,
  setIsAuth,
  error,
  isLoading,
  setErrorREdux,
  adminEmail,
  adminPassword,
} from '../../store/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Preloader } from '../../components/custom/preloader/Preloader';
import { useState } from 'react';

type AdminType = {
  email: string;
  password: string;
};

function Login() {
  const isAuth = useSelector(setIsAuth);
  const errorRedux = useSelector(error);

  const loader = useSelector(isLoading);
  const dispatch = useDispatch<AppDispatch>();

  const [adminDate, setAdminDate] = useState<AdminType>({
    email: '',
    password: '',
  });

  function handleChangeForAdmin(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'email') {
      setAdminDate({
        ...adminDate,
        email: e.target.value,
      });
    } else if (e.target.name === 'password') {
      setAdminDate({
        ...adminDate,
        password: e.target.value,
      });
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (values: { email: string; password: string }) => {
    dispatch(fetchAuth(values));
    setTimeout(() => {
      dispatch(setErrorREdux(''));
    }, 3000);
  };

  if (isAuth) {
    if (
      adminDate.email === adminEmail &&
      adminDate.password === adminPassword
    ) {
      return <Navigate to="/admin" />;
    } else {
      return <Navigate to="/profile" />;
    }
  }

  return (
    <div className={styles.container}>
      <SecondHeader />
      <div className={styles.login__input}>
        <h3>Log in</h3>
        {/* <div className={styles.google__button}>
          <img src={google} alt="Google logo" />
          <div>
            <Button name="Sign up with Google" callback={() => {}} />
          </div>
        </div>
        <div className={styles.or}>
          <div></div>
          <p>OR</p>
          <div></div>
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            <input
              type="email"
              {...register('email', { required: 'Укажите почту' })}
              placeholder="Email"
              onChange={handleChangeForAdmin}
            />
            <div>{errors.email?.message}</div>
            <input
              type="password"
              {...register('password', { required: 'Укажите пароль' })}
              placeholder="Password"
              onChange={handleChangeForAdmin}
            />
            {errors.password?.message}
            <div className={styles.errorRed}>
              {errorRedux ? errorRedux : ''}
            </div>
          </div>
          {loader === 'loading' ? (
            <Preloader />
          ) : (
            <div className={styles.login__button}>
              <Button type="submit" name="Log in" disabled={!isValid} />
            </div>
          )}
        </form>
        <p>
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
