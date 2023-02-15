import SecondHeader from '../../components/secodHeader/SecondHeader';
import styles from './Meeting.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/custom/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function MeetingDetails() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const meetingID = useParams().id;
  const meetings = useSelector(
    (state: RootState) => state.meetings.meetings.item
  );

  let num = 0;
  meetings.forEach((meeting, i) => {
    if (meeting._id === meetingID) num = i;
  });

  const meeting = meetings[num];

  // const [role, setRole] = useState<string>('');

  // const handleRole = (el: HTMLElement) => {
  //   setRole(el.innerHTML);
  // };

  return (
    <div>
      <SecondHeader />
      <div className={styles.back__button}>
        <button onClick={() => navigate(-1)}>&#8249; Back</button>
      </div>
      <div className={styles.containerMeeting}>
        <div className={styles.meeting}>
          <div className={styles.title__details}>{meeting.title}</div>
          <div>
            <img
              className={styles.img__meeting}
              src={meeting.url}
              alt={meeting.title}
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
            <p className={styles.count__details}>0 / {meeting.personCount}</p>
          </div>
          <div className={styles.description}>{meeting.description}</div>
        </div>
        <div className={styles.about}>
          <div className={styles.minititle}>{meeting.title}</div>
          <div className={[styles.description, styles.information].join(' ')}>
            {meeting.description}
          </div>
          <div className={styles.minititle}>Roles</div>
          <div className={[styles.roles, styles.information].join(' ')}>
            {/* <p onClick={(e) => handleRole(e.target as HTMLElement)}>Role 1</p> */}
            {/* <p onClick={(e) => handleRole(e.target as HTMLElement)}>Role 2</p> */}
            <p>Role 1</p>
            <p>Role 2</p>
          </div>
          <div className={styles.minititle}>General task</div>
          <div className={[styles.description, styles.information].join(' ')}>
            {meeting.description}
          </div>
          <div className={styles.select__button}>
            <Button name="Select" callback={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingDetails;
