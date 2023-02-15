import { useSelector } from 'react-redux';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import { isLoading } from '../../store/slice/authSlice';
import { Preloader } from '../../components/custom/preloader/Preloader';
import Button from '../../components/custom/button/Button';

function Admin() {
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
          <h3>Admin dashboard</h3>
          HI, {objUss.name}
          <Button name="create meeting" />
          <p>
            По кнопке всплывает модалка с полями для события или прост дивка
            появляется.
          </p>
          <div>Все события, если админ то с кнопкой удалить, редактировать</div>
          <div>Нужна модалка</div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Admin;
