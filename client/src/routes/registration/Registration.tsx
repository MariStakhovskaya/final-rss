import Button from '../../components/custom/button/Button';
import styles from './Registration.module.css';
//import google from '../../images/google.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import {
  error,
  fetchRegister,
  isLoading,
  setErrorREdux,
} from '../../store/slice/authSlice';
import { setIsAuth } from '../../store/slice/authSlice';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Preloader } from '../../components/custom/preloader/Preloader';

function Registration() {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(setIsAuth);
  const errorRedux = useSelector(error);
  const loader = useSelector(isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    dispatch(fetchRegister(values));
    setTimeout(() => {
      dispatch(setErrorREdux(''));
    }, 3000);
  };

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.registration__input}>
        <h3>Create an Account</h3>
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
              type="text"
              {...register('name', {
                required: 'Укажите имя',
                minLength: {
                  value: 3,
                  message: 'Имя должно быть больше 3 символов',
                },
              })}
              placeholder="First Name"
            />
            <div className={styles.errorRed}>{errors.name?.message}</div>
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
            <div className={styles.errorRed}>{errors.password?.message}</div>
            <div className={styles.errorRed}>
              {errorRedux ? errorRedux : ''}
            </div>
          </div>
          {loader === 'loading' ? (
            <Preloader />
          ) : (
            <div className={styles.create__button}>
              <Button name="Create Account" type="submit" disabled={!isValid} />
            </div>
          )}
        </form>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Registration;
