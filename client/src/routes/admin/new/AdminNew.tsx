import React, { useEffect, useState } from 'react';
import styles from './AdminNew.module.css';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { fetchRegister, setErrorREdux } from '../../../store/slice/authSlice';
import { createOneMeeting } from '../../../store/slice/meetingSlice';
import { createUser } from '../../../store/slice/userSlice';

type AdminNewType = {
  title: string;
};

type NewUserType = {
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

type RoleType = {
  Role: string;
};

type UsersType = {
  id: string;
  role: string;
};

type NewMeetingType = {
  title: string;
  description: string;
  date: string;
  time: string;
  personCount: number;
  role: RoleType[];
  users: [];
  fulldescriptions: string;
  url: string;
};

const AdminNew = ({ title }: AdminNewType) => {
  const dispatch = useDispatch<AppDispatch>();

  const [fileImg, setFileImg] = useState('');

  const [page, setPage] = useState('');
  const navigate = useNavigate();

  const [data, setData] = useState<NewUserType>({
    name: 'New User Name',
    email: 'NewYserEmail.gmail.com',
    password: 'GoodPassword',
    createdAt: 'UpdatedData',
    updatedAt: 'updated Data',
  });

  const [meeting, setMeeting] = useState<NewMeetingType>({
    title: 'Meeting Title',
    description: 'Some text description',
    date: '21.02.2023',
    time: '02.00',
    personCount: 2,
    role: [{ Role: 'role1' }, { Role: 'role2' }],
    users: [],
    fulldescriptions: 'Some full descriptions',
    url: '',
  });

  const location = useLocation();
  useEffect(() => {
    const nowLocation = location.pathname.split('/');
    setPage(nowLocation[nowLocation.length - 1]);
  }, []);

  function getFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target !== null) {
      const target = e.target as HTMLInputElement;
      if (target.files !== null) {
        return target.files[0];
      }
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  }

  function handleInputMeeting(e: React.ChangeEvent<HTMLInputElement>) {
    const id = e.target.id;
    const value = e.target.value;
    const roleArr: RoleType[] = [];
    const usersArr: UsersType[] = [];
    const allUsers: { id: string; role: string }[] = new Array(
      meeting.personCount
    );
    const usersId: string[] = new Array(meeting.personCount);
    const usersRole: string[] = new Array(meeting.personCount);

    usersId.fill('');
    usersRole.fill('');

    /*  if (id === 'usersId') {
      const arr = value.split(',');
      usersId = arr.map((elem) => elem.trim());
    }
    if (id === 'usersRole') {
      const arr = value.split(',');
      usersRole = arr.map((elem) => elem.trim());
    } */

    if (id === 'role') {
      if (value.includes('|')) {
        const arr = value.split('|');
        arr.forEach((elem) => {
          roleArr.push({ Role: elem.trim() });
        });
      } else {
        roleArr.push({ Role: e.target.value });
      }
      setMeeting({ ...meeting, [id]: roleArr });
    } /* else if (id === 'usersId' || id === 'usersRole') {
      allUsers = usersId.map((elem, index) => ({
        id: usersId[index],
        role: usersRole[index],
      }));
      console.log(allUsers);
    } */ else {
      setMeeting({ ...meeting, [id]: value });
    }
    if (id === 'date') {
      const dateVal = new Date(value).toLocaleDateString();
      console.log(dateVal);
      setMeeting({ ...meeting, date: dateVal });
    }
    if (id === 'file') {
      setFileImg(value);
      setMeeting({ ...meeting, url: value });
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    setData({ ...data, updatedAt: '', createdAt: new Date().toString() });
    e.preventDefault();
    dispatch(createUser(data));
    setTimeout(() => {
      console.log(data);
      dispatch(setErrorREdux(''));
      navigate(-1);
    }, 3000);
  };

  const handleSubmitMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createOneMeeting({ body: meeting }));
    setTimeout(() => {
      console.log(meeting);
      dispatch(setErrorREdux(''));
      navigate(-1);
    }, 3000);
  };

  return (
    <>
      <div className={styles.top}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <img
            className={styles.img}
            src={
              fileImg
                ? fileImg
                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            }
            alt=""
          />
        </div>
        <div className={styles.right}>
          {page === 'newUser' ? (
            <>
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
                    />
                  </div>
                  <div className={styles.formInput}>
                    <label htmlFor="file" className={styles.adminLabel}>
                      Image:
                      <DriveFolderUploadOutlinedIcon className={styles.icon} />
                    </label>
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
                    />
                  </div>
                  <div className={styles.formInput}>
                    <label htmlFor="" className={styles.adminLabel}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className={styles.inputNewAdmin}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className={styles.buttonWrapper}>
                  <button className={styles.buttonNewAdmin} type="submit">
                    Send
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <form action="" onSubmit={handleSubmitMeeting}>
                <div className={styles.form}>
                  <div className={styles.formInput}>
                    <label htmlFor="" className={styles.adminLabel}>
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="New Meeting Title"
                      onChange={handleInputMeeting}
                      className={styles.inputNewAdmin}
                    />
                  </div>
                  <div className={styles.formInput}>
                    <label htmlFor="file" className={styles.adminLabel}>
                      Image:
                      <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    {/*  <input
                      onChange={(e) => setFileImg(getFile(e))}
                      type="file"
                      id="file"
                      style={{ display: 'none' }}
                      className={styles.inputNewAdmin}
                    /> */}
                    <input
                      type="text"
                      id="file"
                      placeholder="New User Name"
                      onChange={handleInputMeeting}
                      //onChange={(e) => setFileImg(e.value)}
                      className={styles.inputNewAdmin}
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
                    />
                  </div>
                </div>
                <div className={styles.buttonWrapper}>
                  <button className={styles.buttonNewAdmin} type="submit">
                    Send
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminNew;
