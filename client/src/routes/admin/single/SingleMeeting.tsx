import styles from './Single.module.css';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateOneMeeting } from '../../../store/slice/meetingSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { useState } from 'react';
import { setErrorREdux } from '../../../store/slice/authSlice';

type RoleType = {
  [key: string]: string;
};

type NewMeetingType = {
  title: string;
  description: string;
  date: string;
  time: string;
  personCount: number;
  role: RoleType[];
  // users: UsersType[];
  fulldescriptions: string;
  url: string;
};

const SingleMeeting = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const target = useParams();
  const id = target.id;
  const item = useSelector(
    (state: RootState) => state.meetings.meetings
  ).item.filter((e) => e._id === id);

  const [fileImg, setFileImg] = useState('');

  const [meeting, setMeeting] = useState<NewMeetingType>({
    title: item[0].title,
    description: item[0].description,
    date: item[0].date,
    time: item[0].time,
    personCount: item[0].personCount,
    role: item[0].role,
    // users: item[0].users,
    fulldescriptions: item[0].fulldescriptions,
    url: item[0].url,
  });

  function handleInputMeeting(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.id;
    const value = e.target.value;
    const roleArr: RoleType[] = [];
    const usersId: string[] = new Array(meeting.personCount);
    const usersRole: string[] = new Array(meeting.personCount);

    usersId.fill('');
    usersRole.fill('');
    if (name === 'role') {
      if (value.includes('|')) {
        const arr = value.split('|');
        arr.forEach((elem) => {
          roleArr.push({ Role: elem.trim() });
        });
      } else {
        roleArr.push({ Role: e.target.value });
      }
      setMeeting({ ...meeting, [name]: roleArr });
    } else {
      setMeeting({ ...meeting, [name]: value });
    }
    if (name === 'date') {
      const dateVal = new Date(value).toLocaleDateString();
      setMeeting({ ...meeting, date: dateVal });
    }
    if (name === 'file') {
      setFileImg(value);
      setMeeting({ ...meeting, url: value });
    }
  }

  const handleSubmitMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(updateOneMeeting({ id: id, body: meeting }));
    }
    setTimeout(() => {
      console.log(meeting);
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
              src={
                fileImg
                  ? meeting.url
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt="Avatar"
              className={styles.itemImg}
            />
            <form action="" onSubmit={handleSubmitMeeting}>
              <div className={styles.form}>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.title}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="file" className={styles.adminLabel}>
                    Image:
                    <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="text"
                    id="file"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.url}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    min="2023-02-21"
                    max="2033-12-31"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.date}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.time}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Count Person
                  </label>
                  <input
                    type="number"
                    id="personCount"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.personCount}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Description
                  </label>
                  <input
                    type="textarea"
                    id="description"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.description}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Role | Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.role.map((elem) => `${elem.Role} |`).join()}
                  />
                </div>
                <div className={styles.formInput}>
                  <label htmlFor="" className={styles.adminLabel}>
                    Full Descriptions
                  </label>
                  <input
                    type="text"
                    id="fulldescriptions"
                    onChange={handleInputMeeting}
                    className={styles.inputNewAdmin}
                    value={meeting.fulldescriptions}
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

export default SingleMeeting;
