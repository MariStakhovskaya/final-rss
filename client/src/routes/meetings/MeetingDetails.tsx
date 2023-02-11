import SecondHeader from '../../components/secodHeader/SecondHeader';
import styles from './Meeting.module.css';
import { useNavigate } from 'react-router-dom';

// type MeetingType = {
//   _id: string;
//   title: string;
//   description: string;
//   personCount: number;
//   time: string;
//   date: string;
//   url: string;
//   __v: number;
// };

// type MeetingPropsType = {
//   meeting: MeetingType;
// };

function MeetingDetails() {
  const navigate = useNavigate();
  return (
    <>
      <SecondHeader />
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className={styles.containerMeeting}>
        {/* <div className={styles.title}>{props.meeting.title}</div>
      <div>
        <img
          className={styles.imgMeeting}
          src={props.meeting.url}
          alt="meeting"
        />
      </div>
      <div>{props.meeting.personCount}</div>
      <div className={styles.description}>{props.meeting.description}</div>
      <div>
        <button className={styles.btnMeeting}>
          <span className={styles.btnName}>{props.meeting.date}</span>
          <span className={styles.btnName}>{props.meeting.time}</span>
        </button>
      </div> */}
      </div>
    </>
  );
}

export default MeetingDetails;
