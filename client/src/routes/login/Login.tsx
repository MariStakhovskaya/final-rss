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
} from '../../store/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Preloader } from '../../components/custom/preloader/Preloader';

function Login() {
  const isAuth = useSelector(setIsAuth);
  const errorRedux = useSelector(error);
  //console.log(errorRedux);
  const loader = useSelector(isLoading);
  const dispatch = useDispatch<AppDispatch>();

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
    return <Navigate to="/profile" />;
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
            />
            <div>{errors.email?.message}</div>
            <input
              type="password"
              {...register('password', { required: 'Укажите пароль' })}
              placeholder="Password"
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
