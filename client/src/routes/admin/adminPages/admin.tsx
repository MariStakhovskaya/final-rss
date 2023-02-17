import Chart from '../../../components/admins/chart/Chart';
import Featured from '../../../components/admins/featured/Featured';
import Navbar from '../../../components/admins/navbar/Navbar';
import Sidebar from '../../../components/admins/sidebar/Sidebar';
import Widget from '../../../components/admins/widgets/Widget';
import List from '../../../components/admins/table/Table';
import './admin.scss';
import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchMeeting } from '../../../store/slice/meetingSlice';

const Admin = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [meetings, setMeetings] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  const { item } = useSelector((state: RootState) => state.meetings.meetings);

  useEffect(() => {
    dispatch(fetchMeeting());
    //setMeetings(item.length);
  }, []);

  useEffect(() => {
    setMeetings(item.length);
  }, [dispatch]);

  console.log(item);
  console.log(item.length);

  return (
    <div className={darkMode ? 'admin dark' : 'admin'}>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" count={item.length} />
          <Widget type="meeting" count={meetings} />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title={'Last 6 Month (Users)'} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Users</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Admin;
