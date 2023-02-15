import './sidebar.scss';
import GridViewIcon from '@mui/icons-material/GridView';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span>!!! Logo !!!</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <GridViewIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <MeetingRoomIcon className="icon" />
            <span>Meetings</span>
          </li>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
