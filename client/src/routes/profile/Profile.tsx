import { useSelector } from 'react-redux';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import { isLoading } from '../../store/slice/authSlice';
import { Preloader } from '../../components/custom/preloader/Preloader';

function Profile() {
  let objUss;
  // const isAuth = useAppSelector((state) => state.auth.status);
  const loader = useSelector(isLoading);
  // const dispatch = useDispatch<AppDispatch>();
  const userDateLocal = localStorage.getItem('user');
  if (userDateLocal) {
    objUss = { ...JSON.parse(userDateLocal) };
  }

  return (
    <>
      {loader === 'loaded' ? (
        <div>
          <SecondHeader />
          HI, {objUss.name}
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Profile;
