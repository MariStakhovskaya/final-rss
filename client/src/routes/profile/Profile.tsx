import { useDispatch, useSelector } from 'react-redux';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import {
  fetchAuthMe,
  isLoading,
  setIsAuth,
  setUser,
} from '../../store/slice/authSlice';
import { Preloader } from '../../components/custom/preloader/Preloader';
import { AppDispatch, RootState, useAppSelector } from '../../store/store';
import { useEffect, useState } from 'react';
import Meetings from '../meetings/Meetings';

function Profile() {
  let objUss;
  const isAuth = useAppSelector((state) => state.auth.status);
  //const userData = useAppSelector((state) => state.auth.dataUser);
  //console.log(userData.name);
  const loader = useSelector(isLoading);
  const dispatch = useDispatch<AppDispatch>();
  const userDateLocal = localStorage.getItem('user');
  if (userDateLocal) {
    objUss = { ...JSON.parse(userDateLocal) };
  }

  useEffect(() => {
    // dispatch(fetchMeeting());
  }, [dispatch]);

  return (
    <>
      {loader === 'loaded' ? (
        <div>
          <SecondHeader />
          HI, {objUss.name}
          <div>
            <Meetings />
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Profile;
