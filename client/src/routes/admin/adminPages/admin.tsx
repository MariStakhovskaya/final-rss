import Chart from '../../../components/admins/chart/Chart';
import Featured from '../../../components/admins/featured/Featured';
import Navbar from '../../../components/admins/navbar/Navbar';
import Sidebar from '../../../components/admins/sidebar/Sidebar';
import Widget from '../../../components/admins/widgets/Widget';
import List from '../../../components/admins/table/Table';
import './admin.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchMeeting } from '../../../store/slice/meetingSlice';
import { allMeetings } from '../../../store/selectors';
import { Preloader } from '../../../components/custom/preloader/Preloader';
import { getAllUsers } from '../../../store/slice/userSlice';

const Admin = () => {
  // const { darkMode } = useContext(DarkModeContext);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchMeeting());
    //setMeetings(item.length);
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllUsers());
    //setMeetings(item.length);
  }, [dispatch]);
  const item = useSelector(allMeetings);
  const isloading = useSelector(
    (state: RootState) => state.meetings.meetings.status
  );
  const usersData = useSelector((state: RootState) => state.user.users);
  //const [meetings, setMeetings] = useState(item.length);
  console.log(usersData);
  console.log(item);
  console.log(item.length);

  return (
    <>
      {isloading === 'loading' ? (
        <Preloader />
      ) : (
        <div>
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget type="user" count={item.length} />
              <Widget type="meeting" count={item.length} />
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
      )}
    </>
  );
};

export default Admin;
