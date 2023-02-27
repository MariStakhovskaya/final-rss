import styles from './Meeting.module.css';
import Button from '../../components/custom/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

  const [role, setRole] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean[]>([]);
  const [isDisable, setIsDisable] = useState<boolean>();
  const [buttonName, setButtonName] = useState<string>('');

  const userId = localStorage.getItem('userId');
  const roles = useSelector(
    (state: RootState) => state.meetings.meeting.meetingItem.role
  );
  const { title, url, personCount, description, fulldescriptions } =
    useSelector((state: RootState) => state.meetings.meeting.meetingItem);
  const users = useSelector(
    (state: RootState) => state.meetings.meeting.meetingItem.users
  );

  useEffect((): void => {
    if (id) {
      dispatch(getOneMeeting({ id }));
    }
  }, [id, dispatch]);

  useEffect((): void => {
    setIsActive(new Array(roles?.length).fill(false));
    setIsDisable(
      !users?.find((el) => el.id === userId) && users?.length >= personCount
        ? true
        : false
    );
    setButtonName(
      users?.find((el) => el.id === userId) ? 'Unselect' : 'Select'
    );
  }, [personCount, roles, userId, users]);

  const isLoading = useSelector(
    (state: RootState) => state.meetings.meeting.status
  );

  const roleSelect = (selectRole: string, index: number): void => {
    setRole(selectRole);
    setIsActive(
      isActive.map((el, i) => {
        if (i === index) return true;
        return false;
      })
    );
  };

  const selectHandler = async (name: string): Promise<void> => {
    let body = {};
    if (userId) {
      if (name === 'Select') {
        body = { users: [...users, { id: userId, role: role }] };
        setButtonName('Unselect');
      } else {
        body = { users: users.filter((el) => el.id !== userId) };
        setButtonName('Select');
      }
    }
    if (id) {
      await dispatch(updateOneMeeting({ id, body }));
      await dispatch(getOneMeeting({ id }));
      setRole('');
    }
  };

  return (
    <div>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div>
          <div className={styles.back__button}>
            <button onClick={() => navigate(-1)}>&#8249; Back</button>
          </div>
          <div className={styles.containerMeeting}>
            <div className={styles.meeting}>
              <div className={styles.title__details}>{title}</div>
              <div>
                <img
                  className={styles.img__meeting}
                  src={
                    url
                      ? url
                      : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                  }
                  alt={title}
                />
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
                {fulldescriptions}
              </div>
              <div className={[styles.minititle, styles.choice].join(' ')}>
                <p>Roles</p>
                <p className={styles.footnote}>(choose a role)</p>
              </div>
              <div className={[styles.roles, styles.information].join(' ')}>
                {roles &&
                  roles.map((rol: RoleType, index) => {
                    return (
                      <div
                        key={index}
                        className={[
                          styles.role,
                          isActive[index]
                            ? styles.role__active
                            : styles.role__passive,
                        ].join(' ')}
                      >
                        <Button
                          name={rol.Role}
                          callback={() => roleSelect(rol.Role, index)}
                          disabled={
                            isDisable ||
                            users?.find((el) => el.id === userId) ||
                            users?.find((el) => el.role === rol.Role)
                              ? true
                              : false
                          }
                        />
                      </div>
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
                <Button
                  name={buttonName}
                  callback={() => selectHandler(buttonName)}
                  disabled={
                    isDisable ||
                    (buttonName === 'Select' && role === '' ? true : false)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeetingDetails;
