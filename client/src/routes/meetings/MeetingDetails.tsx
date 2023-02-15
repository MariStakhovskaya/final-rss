import SecondHeader from '../../components/secodHeader/SecondHeader';
import styles from './Meeting.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/store';

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
  const params = useParams();
  console.log(params);

  const meeting = useAppSelector((state) =>
    state.meetings.meetings.item.filter((el) => el._id === params._id)
  );
  // const dispatch = useDispatch<AppDispatch>();
  console.log(meeting);
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
