import styles from './Meeting.module.css';
import SecondHeader from '../../components/secodHeader/SecondHeader';
import Button from '../../components/custom/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  getOneMeeting,
  RoleType,
  updateOneMeeting,
} from '../../store/slice/meetingSlice';
import { Preloader } from '../../components/custom/preloader/Preloader';

function MeetingDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const id = useParams().id;

  useEffect(() => {
    if (id) {
      dispatch(getOneMeeting({ id }));
      getUsersData();
    }
  }, [id, dispatch]);

  const userId = localStorage.getItem('userId');
  const isLoading = useSelector(
    (state: RootState) => state.meetings.meeting.status
  );

  const { title, url, personCount, description } = useSelector(
    (state: RootState) => state.meetings.meeting.meetingItem
  );
  const users = useSelector(
    (state: RootState) => state.meetings.meeting.meetingItem.users
  );
  console.log(users);

  const roles = useSelector(
    (state: RootState) => state.meetings.meeting.meetingItem.role
  );

  const [role, setRole] = useState<string>('');

  const roleSelect = (selectRole: string, index: number) => {
    const newVal = roles.map((el, i) => (index === i ? true : false));
    setIsActive(newVal);
    setRole(selectRole);
  };

  const getUsersData = () => {
    console.log(users);
  };

  const [isActive, setIsActive] = useState<boolean[]>([]);

  const selectHandler = () => {
    let body = {};
    if (userId) {
      // Надо сделать проверку на длину массива users, и если больше чем countPeople дизейблить кнопку.
      body = { users: [...users, { id: userId, role: role }] };
      console.log(body);
    }
    if (id) {
      dispatch(updateOneMeeting({ id, body })).then(() => {
        dispatch(getOneMeeting({ id }));
      });
    }
  };

  return (
    <>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div>
          <SecondHeader />
          <div className={styles.back__button}>
            <button onClick={() => navigate(-1)}>&#8249; Back</button>
          </div>
          <div className={styles.containerMeeting}>
            <div className={styles.meeting}>
              <div className={styles.title__details}>{title}</div>
              <div>
                <img className={styles.img__meeting} src={url} alt={title} />
              </div>
              <div className={styles.count__block__details}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 12C15.6887 12 17.8818 14.1223 17.9954 16.7831L18 17V18C18 19.0544 17.1841 19.9182 16.1493 19.9945L16 20H2C0.945638 20 0.0818349 19.1841 0.00548577 18.1493L0 18V17C0 14.3113 2.12231 12.1182 4.78311 12.0046L5 12H13ZM13 14H5C3.40232 14 2.09634 15.2489 2.00509 16.8237L2 17V18H16V17C16 15.4023 14.7511 14.0963 13.1763 14.0051L13 14ZM9 0C11.7614 0 14 2.23858 14 5C14 7.76142 11.7614 10 9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0ZM9 2C7.3431 2 6 3.34315 6 5C6 6.65685 7.3431 8 9 8C10.6569 8 12 6.65685 12 5C12 3.34315 10.6569 2 9 2Z"
                  />
                </svg>
                <p className={styles.count__details}>
                  {users ? users.length : 0} / {personCount}
                </p>
              </div>
              <div className={styles.description}>{description}</div>
            </div>
            <div className={styles.about}>
              <div className={styles.minititle}>{title}</div>
              <div
                className={[styles.description, styles.information].join(' ')}
              >
                {description}
              </div>
              <div className={styles.minititle}>Roles</div>
              <div className={[styles.roles, styles.information].join(' ')}>
                {roles &&
                  roles.map((rol: RoleType, index) => {
                    return (
                      <p
                        key={index}
                        onClick={() => roleSelect(rol.Role, index)}
                        className={isActive[index] ? styles.active : ''}
                      >
                        {rol.Role}
                      </p>
                    );
                  })}
              </div>
              <div className={styles.minititle}>General task</div>
              <div
                className={[styles.description, styles.information].join(' ')}
              >
                {description}
              </div>
              <div className={styles.select__button}>
                <Button name="Select" callback={selectHandler} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MeetingDetails;
