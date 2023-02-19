import './sidebar.scss';
import GridViewIcon from '@mui/icons-material/GridView';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span>!!! Logo !!!</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/admin/">
            <li>
              <GridViewIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/allMeeting">
            <li>
              <MeetingRoomIcon className="icon" />
              <span>Meetings</span>
            </li>
          </Link>
          <Link to="/admin/allUsers">
            <li>
              <AccountBoxIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
