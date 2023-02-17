import { useDispatch, useSelector } from 'react-redux';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import { isLoading } from '../../store/slice/authSlice';
import { Preloader } from '../../components/custom/preloader/Preloader';
import { useEffect } from 'react';
import { AppDispatch, RootState, useAppSelector } from '../../store/store';
import { getUserData } from '../../store/slice/userSlice';
import { Navigate } from 'react-router-dom';

function Profile() {
  const dispatch = useDispatch<AppDispatch>();

  const isAuth = useAppSelector((state) => state.auth.status);
  const loader = useSelector(isLoading);

  const userId = localStorage.getItem('userId');
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (userId) {
      dispatch(getUserData({ userId }));
    }
  }, [userId, dispatch]);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {loader === 'loaded' ? (
        <div>
          <SecondHeader />
          HI, {user.name}
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Profile;
