import styles from './SettingsUser.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../../store/store';
import { useState } from 'react';
import { setErrorREdux } from '../../store/slice/authSlice';
import { updateOneUser } from '../../store/slice/userSlice';

type NewUserType = {
  name: string;
  email: string;
};

const SettingsUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.user);

  const [data, setData] = useState<NewUserType>({
    name: user.name,
    email: user.email,
  });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.id;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateOneUser({ id: user._id, body: data }));
    setTimeout(() => {
      console.log(data);
      dispatch(setErrorREdux(''));
      navigate(-1);
    }, 3000);
  };

  return (
    <>
      <div className={styles.top}>
        <div className={styles.left}>
          <p className={styles.title}>Information</p>
          <div className={styles.item}>
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="Avatar"
              className={styles.itemImg}
            />
            <form action="" onSubmit={handleSubmit}>
              <div className={styles.form}>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    UserName
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="New User Name"
                    onChange={handleInput}
                    className={styles.inputNewAdmin}
                    value={data.name}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="NewUser@gmail.com"
                    onChange={handleInput}
                    className={styles.inputNewAdmin}
                    value={data.email}
                  />
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.buttonNewAdmin} type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsUser;
