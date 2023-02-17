import React, { useEffect, useState } from 'react';
import './adminNew.scss';
import Sidebar from '../../../components/admins/sidebar/Sidebar';
import Navbar from '../../../components/admins/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { fetchRegister, setErrorREdux } from '../../../store/slice/authSlice';
import { fetchMeeting } from '../../../store/slice/meetingSlice';

type AdminNewType = {
  title: string;
};

type NewUserType = {
  name: string;
  email: string;
  password: string;
};

type NewMeetingType = {
  title: string;
  description: string;
  date: string;
  time: string;
  personCount: number;
};

const AdminNew = ({ title }: AdminNewType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [fileImg, setFileImg] = useState<File>();
  const [page, setPage] = useState('');
  const navigate = useNavigate();
  const [data, setData] = useState<NewUserType>({
    name: 'New User Name',
    email: 'NewYserEmail.gmail.com',
    password: 'GoodPassword',
  });
  const [meeting, setMeeting] = useState<NewMeetingType>({
    title: 'Meeting Title',
    description: 'Some text description',
    date: '21.02.2023',
    time: '02.00',
    personCount: 2,
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

    console.log(id);
    console.log(value);

    setMeeting({ ...meeting, [id]: value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchRegister(data));
    setTimeout(() => {
      console.log(data);
      dispatch(setErrorREdux(''));
      navigate(-1);
    }, 3000);
  };

  const handleSubmitMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    //dispatch(fetchMeeting(meeting));
    setTimeout(() => {
      console.log(meeting);
      dispatch(setErrorREdux(''));
      navigate(-1);
    }, 3000);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <p className="title">{title}</p>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                fileImg
                  ? URL.createObjectURL(fileImg)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            {page === 'newUser' ? (
              <>
                <form action="" onSubmit={handleSubmit}>
                  <div className="formInput">
                    <label htmlFor="">UserName</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="New User Name"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="file">
                      Image:
                      <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      onChange={(e) => setFileImg(getFile(e))}
                      type="file"
                      id="file"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="NewUser@gmail.com"
                      onChange={handleInput}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit">Send</button>
                </form>
              </>
            ) : (
              <>
                <form action="" onSubmit={handleSubmitMeeting}>
                  <div className="formInput">
                    <label htmlFor="">Title</label>
                    <input
                      type="text"
                      id="title"
                      placeholder="New Meeting Title"
                      onChange={handleInputMeeting}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="file">
                      Image:
                      <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    <input
                      onChange={(e) => setFileImg(getFile(e))}
                      type="file"
                      id="file"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="">Date</label>
                    <input
                      type="date"
                      id="date"
                      value="2023-02-22"
                      min="2023-02-21"
                      max="2023-12-31"
                      onChange={handleInputMeeting}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="">Time</label>
                    <input
                      type="time"
                      id="time"
                      onChange={handleInputMeeting}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="">Count Person</label>
                    <input
                      type="number"
                      id="personCount"
                      onChange={handleInputMeeting}
                    />
                  </div>
                  <div className="formInput">
                    <label htmlFor="">Description</label>
                    <input
                      type="textarea"
                      id="description"
                      onChange={handleInputMeeting}
                    />
                  </div>
                  <button type="submit">Send</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNew;
